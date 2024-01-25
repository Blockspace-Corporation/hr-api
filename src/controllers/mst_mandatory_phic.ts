import {  FastifyReply, FastifyRequest } from 'fastify';

import {mst_mandatory_phicID,mst_mandatory_phic} from '../schemas/mst_mandatory_phic';
import mst_mandatory_phicRepository from '../repositories/mst_mandatory_phic';


export const registermst_mandatory_phic = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as mst_mandatory_phic;

  if (
    !requestBody ||
    !requestBody.amount_start ||
    !requestBody.amount_end ||
    !requestBody.employee_contribution_value ||
    !requestBody.employer_contribution_value ||
    !requestBody.remarks ||
    !requestBody.employee_contribution_percentage ||
    !requestBody.employer_contribution_percentage ||
    !requestBody
  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'amount_start, amount_end, employee_contribution_value,employer_contribution_value, remarks, employee_contribution_percentage,employer_contribution_percentage`
    );
  }

  try {
    mst_mandatory_phicRepository.createmst_mandatory_phic({
        amount_start: requestBody.amount_start,
        amount_end:  requestBody. amount_end,
        employee_contribution_value:  requestBody.employee_contribution_value,
        employer_contribution_value:  requestBody. employer_contribution_value,
        remarks: requestBody.remarks,
        employee_contribution_percentage: requestBody.employer_contribution_percentage,
        employer_contribution_percentage: requestBody.employer_contribution_percentage,
      
    });
  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readAllmst_mandatory_phic = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await mst_mandatory_phicRepository.viewmst_mandatory_phic();

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

export const updatemst_mandatory_phic = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as mst_mandatory_phic;
    const targetLabel = await mst_mandatory_phicRepository.updatemst_mandatory_phic(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deletemst_mandatory_phic = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as mst_mandatory_phicID;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await mst_mandatory_phicRepository.deletemst_mandatory_phic(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};

