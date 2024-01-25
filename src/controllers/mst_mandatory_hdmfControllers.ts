import {  FastifyReply, FastifyRequest } from 'fastify';
import {mst_mandatory_hdmfID, mst_mandatory_hdmfRequestBody,} from '../schemas/mst_mandatory_hdmf_Schemas';
import mst_mandatory_hdmfRepository from '../repositories/mst_mandatory_hdmfRepository';

export const mst_mandatory_hdmfHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_mandatory_hdmfRequestBody;

    if (!requestBody 
        || typeof requestBody.amount_start !== 'number'
        || typeof requestBody.amount_end !== 'number'
        || typeof requestBody.employee_contribution_percentage !== 'number'
        || typeof requestBody.employer_contribution_percentage !== 'number' 
        || typeof requestBody.employee_contribution_value !== 'number'
        || typeof requestBody.employer_contribution_value !== 'number'
        || typeof requestBody.remarks !== 'string'
        ){
        return reply.badRequest(`Invalid request body. Required fields: 'amount_start' 'amount_end' 'employee_tax_percentage' 'employee_additional_amount'`);
    }
    try{
        await mst_mandatory_hdmfRepository.createmst_mandatory_hdmf({
            amount_start: requestBody.amount_start,
            amount_end: requestBody.amount_end,
            employee_contribution_percentage: requestBody.employee_contribution_percentage,
            employer_contribution_percentage: requestBody.employer_contribution_percentage,
            employee_contribution_value: requestBody.employee_contribution_value,
            employer_contribution_value: requestBody.employer_contribution_value,
            remarks: requestBody.remarks,
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllmst_mandatory_hdmf = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_mandatory_hdmfRepository.viewmst_mandatory_hdmf();
  
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
  
  export const updatemst_mandatory_hdmfHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_mandatory_hdmfRequestBody;
      const targetLabel = await mst_mandatory_hdmfRepository.updatmst_mandatory_hdmf(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      `console.error(updateLabelHandler: error trying to update label: ${error})`;
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deletemst_mandatory_hdmfHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as mst_mandatory_hdmfID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_mandatory_hdmfRepository.deletemst_mandatory_hdmf(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      `console.error(deleteLabelHandler: error trying to update label: ${error})`;
      reply.internalServerError(JSON.stringify(error));
    }
  };