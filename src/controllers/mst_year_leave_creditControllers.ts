import {FastifyReply, FastifyRequest } from 'fastify';
import {

  MstYearLeaveRequestBody,
  MstYearLeave
} from '../schemas/mst_year_leave_credit_Schemas';

import MstYearLeaveRepository from '../repositories/mst_year_leave_creditRepository';


export const registerHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as MstYearLeaveRequestBody;
  if (
    !requestBody ||
    !requestBody.date_encoded ||
    !requestBody.year_id ||
    !requestBody.employee_id ||       
    !requestBody.leave_credits ||  
    !requestBody.remarks||  
    !requestBody.leave_type ||         
    !requestBody

  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'date_encoded', 'year_id', 'employee_id', 'leave_credits', 'remarks', 'leave_type'`
    );
  }

 

  try {
    MstYearLeaveRepository.createMstYearLeave({

        date_encoded:requestBody.date_encoded,      
        year_id:requestBody.year_id,
        employee_id:requestBody. employee_id,
        leave_credits:requestBody. leave_credits,
        remarks:requestBody.remarks,
        leave_type:requestBody.leave_type,
    });

  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readOneYearLeaveHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as MstYearLeaveRequestBody;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest("Missing 'id' parameter in URI 'company/:id'");
    }

    const targetUser = await MstYearLeaveRepository.getMstYearLeave(requestParams.id);

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

export const readAllYearLeave = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await MstYearLeaveRepository.viewYearLeave();

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

export const updateYearLeaveHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as MstYearLeaveRequestBody;
    const targetLabel = await MstYearLeaveRepository.updateYearLeave(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deleteYearLeaveHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as MstYearLeave;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await MstYearLeaveRepository.deleteYearLeave(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};



