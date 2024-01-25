import {  FastifyReply, FastifyRequest } from 'fastify';
import { Mst_cityID, mst_cityRequestBody,} from '../schemas/mst_citySchema';
import mst_cityRepository from '../repositories/mst_cityRepository';

export const mst_cityHandler =async (
    request: FastifyRequest,
    reply: FastifyReply)=>
    {
    const requestBody = request.body as mst_cityRequestBody;

    if (!requestBody || typeof requestBody.city !== 'string'|| typeof requestBody.province !== 'string'|| typeof requestBody.region !== 'string'|| typeof requestBody.type !== 'string'){
        return reply.badRequest(`Invalid request body. Required fields: 'city' 'province' 'region' 'type`);
    }
    try{
        await mst_cityRepository.createMst_city({
            city: requestBody.city,
            province: requestBody.province,
            region: requestBody.region,
            type: requestBody.type
        })
    } catch(error){
        reply.internalServerError(String(error || "Unknown error occured."));
        return;
    }
    return reply.send({
        message: 'Registration successful.',
    });
};
export const readAllMst_cities = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetLabels = await mst_cityRepository.viewMst_city();
  
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
  
  export const updateMst_cityHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as mst_cityRequestBody;
      const targetLabel = await mst_cityRepository.updateMst_city(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deleteMst_cityHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as Mst_cityID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await mst_cityRepository.deleteMst_city(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  
  