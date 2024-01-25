import {  FastifyReply, FastifyRequest } from 'fastify';
import { Mst_tax_exemption_detailID, mst_tax_exemption_detailRequestBody,} from '../schemas/mst_tax_exemption_detailSchema';
import mst_tax_exemption_detailRepository from '../repositories/mst_tax_exemption_detailRepositoy';

export const mst_tax_exemption_detailHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_tax_exemption_detailRequestBody;

    if (!requestBody || typeof requestBody.tax_exemption_id !== 'number'|| typeof requestBody.type !== 'string'|| typeof requestBody.amount !== 'number'|| typeof requestBody.tax !== 'number' || typeof requestBody.percentage !== 'number'){
        return reply.badRequest(`Invalid request body. Required fields: 'tax_exemprion_id' 'type' 'amount' 'tax' 'percentage' `);
    }
    try{
        await mst_tax_exemption_detailRepository.createMst_tax_exemption_detail({
            tax_exemption_id: requestBody.tax_exemption_id,
            type: requestBody.type,
            amount: requestBody.amount,
            tax: requestBody.tax,
            percentage: requestBody.percentage
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllMst_tax_exemption_details = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_tax_exemption_detailRepository.viewMst_tax_exemption_detail();
  
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
  
  export const updateMst_tax_exemption_detailHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_tax_exemption_detailRequestBody;
      const targetLabel = await mst_tax_exemption_detailRepository.updateMst_tax_exemption_detail(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deleteMst_tax_exemption_detailHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as Mst_tax_exemption_detailID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_tax_exemption_detailRepository.deleteMst_tax_exemption_detail(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  
  