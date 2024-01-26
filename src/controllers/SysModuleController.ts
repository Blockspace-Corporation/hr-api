import { FastifyReply, FastifyRequest } from 'fastify';
import SysModuleRepository from '../repositories/SysModuleRepository';
import { ISysModuleRequestBody } from '../schemas/SysModuleSchemas';
import { sys_module } from '@prisma/client';


export const addsysmoduleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const requestBody = request.body as ISysModuleRequestBody;
  
    if (
      !requestBody ||
      !requestBody.module ||
      !requestBody.particulars ||
      !requestBody
    ) {
      return reply.badRequest(
        `Invalid request body. Required fields: 'module', 'particulars'`
         );
    }
    try {
     const addSysModule = await SysModuleRepository.createSysModule({
            module: requestBody.module,
            particulars: requestBody.particulars
        });
        return reply.send ({
            data: addSysModule
        });
    }catch (error) {
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const getSysModuleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
        const getSysModule = await SysModuleRepository.getSysModule();
      
        return reply.send ({
            labels: getSysModule
        });
    } catch (error) {
        console.error (`GetHandler:error trying to read labels: ${error}`);
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const updateSysModuleandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as sys_module;
      const targetLabel = await SysModuleRepository.updateSysModule(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const deleteSysModuleHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as ISysModuleRequestBody;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
      await SysModuleRepository.deleteSysModule(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  