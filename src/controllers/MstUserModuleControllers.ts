import { FastifyReply, FastifyRequest } from 'fastify';
import { IMstUserModuleRequestBody } from '../schemas/MstUserModuleSchemas';
import MstUserModuleRepository from '../repositories/MstUserModuleRepository';
import { mst_user_module } from '@prisma/client';



export const addmstusermoduleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const requestBody = request.body as IMstUserModuleRequestBody;
  
    if (
      !requestBody ||
      !requestBody.user_id ||
      !requestBody.Module_id ||
      !requestBody.can_open ||
      !requestBody.can_add ||
      !requestBody.can_update ||
      !requestBody.can_lock ||
      !requestBody.can_unlock ||
      !requestBody.can_delete ||
      !requestBody.can_print ||
      !requestBody
    ) {
      return reply.badRequest(
        `Invalid request body. Required fields: 'user_id', 'Module_id', 'can_open', 'can_add', 'can_update', 'can_lock', 'can_unlock', 'can_delete', 'can_print'`
         );
    }
    try {
     const addMstUserModule = await MstUserModuleRepository.createMstUserModule({
            user_id: requestBody.user_id,
            Module_id: requestBody.Module_id,
            can_open: requestBody.can_open,
            can_add: requestBody.can_add,
            can_update: requestBody.can_update,
            can_lock: requestBody.can_lock,
            can_unlock: requestBody.can_unlock,
            can_delete: requestBody.can_delete,
            can_print: requestBody.can_print,
        });
        return reply.send ({
            data: addMstUserModule
        });
    }catch (error) {
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const getmstusermoduleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
        const getMstUserModule = await MstUserModuleRepository.getMstUserModule();
      
        return reply.send ({
            labels: getMstUserModule
        });
    } catch (error) {
        console.error (`GetHandler:error trying to read labels: ${error}`);
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const updatemstusermoduleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_user_module;
      const targetLabel = await MstUserModuleRepository.updateMstUserModule(query);
      return reply.send(targetLabel);

    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const deletemstusermoduleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as mst_user_module;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
      await MstUserModuleRepository.deleteMstUserModule(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  