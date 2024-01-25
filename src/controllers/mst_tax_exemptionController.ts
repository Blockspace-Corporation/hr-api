import {  FastifyReply, FastifyRequest } from 'fastify';
import { Mst_tax_exemptionID, mst_tax_exemptionRequestBody,} from '../schemas/mst_tax_exemptionSchema';
import mst_tax_exemptionRepository from '../repositories/mst_tax_exemptionRepository';

export const mst_tax_exemptionHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_tax_exemptionRequestBody;

    if (!requestBody || typeof requestBody.tax_exemption_code !== 'string'|| typeof requestBody.exemption_amount !== 'number'|| typeof requestBody.dependent_amount !== 'number'){
        return reply.badRequest(`Invalid request body. Required fields: 'tax_exemprion_code' 'exemption_amount' 'dependent_amount'`);
    }
    try{
        await mst_tax_exemptionRepository.createMst_tax_exemption({
            tax_exemption_code: requestBody.tax_exemption_code,
            exemption_amount: requestBody.exemption_amount,
            dependent_amount: requestBody.dependent_amount
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllMst_tax_exemptions = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_tax_exemptionRepository.viewMst_tax_exemption();
  
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
  
  export const updateMst_tax_exemptionHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_tax_exemptionRequestBody;
      const targetLabel = await mst_tax_exemptionRepository.updateMst_tax_exemption(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deleteMst_tax_exemptionHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as Mst_tax_exemptionID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_tax_exemptionRepository.deleteMst_tax_exemption(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  
  