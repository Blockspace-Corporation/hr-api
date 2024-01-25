import {  FastifyReply, FastifyRequest } from 'fastify';
import {mst_mandatory_birID, mst_mandatory_birRequestBody,} from '../schemas/mst_mandatory_bir_Schemas';
import mst_mandatory_birRepository from '../repositories/mst_mandatory_birRepository';

export const mst_mandatory_birHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_mandatory_birRequestBody;

    if (!requestBody || typeof requestBody.amount_start !== 'number'|| typeof requestBody.amount_end !== 'number'|| typeof requestBody.employee_tax_percentage !== 'number'|| typeof requestBody.employee_additional_amount !== 'number'){
        return reply.badRequest(`Invalid request body. Required fields: 'amount_start' 'amount_end' 'employee_tax_percentage' 'employee_additional_amount'`);
    }
    try{
        await mst_mandatory_birRepository.createmst_mandatory_bir({
            amount_start: requestBody.amount_start,
            amount_end: requestBody.amount_end,
            employee_tax_percentage: requestBody.employee_tax_percentage,
            employee_additional_amount: requestBody.employee_additional_amount,
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllmst_mandatory_bir = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_mandatory_birRepository.viewmst_mandatory_bir();
  
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
  
  export const updatemst_mandatory_birHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_mandatory_birRequestBody;
      const targetLabel = await mst_mandatory_birRepository.updatemst_mandatory_bir(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      `console.error(updateLabelHandler: error trying to update label: ${error})`;
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deletemst_mandatory_birHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as mst_mandatory_birID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_mandatory_birRepository.deletemst_mandatory_bir(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      `console.error(deleteLabelHandler: error trying to update label: ${error})`;
      reply.internalServerError(JSON.stringify(error));
    }
  };