import {FastifyReply, FastifyRequest } from 'fastify';
import {

  MstYearRequestBody,
  MstYearID
} from '../schemas/mst_year_Schemas';
import MstYearRepository from '../repositories/mst_year_Repository';


export const registerHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as MstYearRequestBody;
  if (
    !requestBody ||
    !requestBody.year_code ||
    !requestBody.year ||
    !requestBody.date_start ||       
    !requestBody.date_end ||  
    !requestBody.is_closed ||      
    !requestBody.created_by ||
    !requestBody.created_date ||
    !requestBody.update_by ||
    !requestBody.update_date ||
    !requestBody.is_locked ||
    !requestBody

  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'year_code', 'year', 'datestart', 'date_end', 'is_closed', 'create_by','create_date', 'update_by', 'update_date', 'is_locked'`
    );
  }

 

  try {
    MstYearRepository.createMstYear({
        year_code:requestBody.year_code, 
        year:requestBody.year,
        date_start:requestBody.date_start,       
        date_end:requestBody.date_end, 
        is_closed:requestBody.is_closed,     
        created_by:requestBody.created_by,
        created_date:requestBody.created_date,
        update_by:requestBody.update_by,
        update_date:requestBody.update_date,
        is_locked:requestBody.is_locked,
    });

  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readAllYear = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await MstYearRepository.viewYear();

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

export const updateYearHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as MstYearRequestBody;
    const targetLabel = await MstYearRepository.updateYear(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deleteYearHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as MstYearID;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await MstYearRepository.deleteYear(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};

