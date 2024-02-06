import {FastifyReply, FastifyRequest } from 'fastify';
import {

  MstYearDateRequestBody,
  MstYearDate
} from '../schemas/mst_year_date_Schemas';

import MstYearDateRepository from '../repositories/mst_year_date.Repository';


export const registerHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as MstYearDateRequestBody;
  if (
    !requestBody ||
    !requestBody.year_id ||
    !requestBody.year_date ||
    !requestBody.branch ||       
    !requestBody.data_type ||  
    !requestBody.remarks||      
    !requestBody

  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'year_id', 'year_date', 'branch', 'date_type', 'remarks'`
    );
  }

 

  try {
    MstYearDateRepository.createMstYearDate({
        year_id:requestBody.year_id, 
        year_date:requestBody.year_date,
        branch:requestBody.branch,       
        data_type:requestBody.data_type, 
        remarks:requestBody.remarks,     
    });

  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readOneYearDateHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as MstYearDateRequestBody;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest("Missing 'id' parameter in URI 'company/:id'");
    }

    const targetUser = await MstYearDateRepository.getMstByYearDate(requestParams.id);

    if (!targetUser) {
      return reply.notFound('User not found.');
    }

    return reply.send ({
      data: targetUser,
    })
  } catch (error) {
    console.error(`readOneLabelHandler: error trying to read user: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const readAllYearDate = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await MstYearDateRepository.viewYearDate();

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

export const updateYearDateHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as MstYearDateRequestBody;
    const targetLabel = await MstYearDateRepository.updateYearDate(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deleteYearDateHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as MstYearDate;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await MstYearDateRepository.deleteYearDate(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};

