import {  FastifyReply, FastifyRequest } from 'fastify';
import { Mst_accountID, mst_accountRequestBody,} from '../schemas/mst_accountSchema';
import mst_accountRepository from '../repositories/mst_accountRepository';

export const mst_accountHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_accountRequestBody;

    if (!requestBody || typeof requestBody.account_code !== 'string'|| typeof requestBody.account_name !== 'string'|| typeof requestBody.description !== 'string'|| typeof requestBody.code !== 'string'){
        return reply.badRequest(`Invalid request body. Required fields: 'account_code' 'account_name' 'description' 'code`);
    }
    try{
        await mst_accountRepository.createMst_account({
            account_code: requestBody.account_code,
            account_name: requestBody.account_name,
            description: requestBody.description,
            code: requestBody.code
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllMst_accounts = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_accountRepository.viewMst_account();
  
      return reply.send({
        labels: targetLabels,
      });
    } catch (error) {
      console.error(
        `readAllLabelsHandler: error trying to read labels: ${error}`
      );
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const updateMst_accountHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_accountRequestBody;
      const targetLabel = await mst_accountRepository.updateMst_account(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deleteMst_accountHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as Mst_accountID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_accountRepository.deleteMst_account(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  
  