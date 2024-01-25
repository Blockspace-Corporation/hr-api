import {  FastifyReply, FastifyRequest } from 'fastify';

import {mst_mandatory_sssID,mst_mandatory_sss} from '../schemas/mst_mandatory_sss';
import mst_mandatory_sssRepository from '../repositories/mst_mandatory_sss';


export const registermst_mandatory_sss = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as mst_mandatory_sss;

  if (
    !requestBody ||
    !requestBody.amount_start ||
    !requestBody.amount_end ||
    !requestBody.employee_contribution_value ||
    !requestBody.employer_contribution_value ||
    !requestBody.employer_ec_value ||
    !requestBody.remarks ||
    !requestBody
  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'amount_start, amount_end, employee_contribution_value,employer_contribution_value, employer_ec_value, remarks`
    );
  }

  try {
    mst_mandatory_sssRepository.createmst_mandatory_sss({
        amount_start: requestBody.amount_start,
        amount_end:  requestBody. amount_end,
        employee_contribution_value:  requestBody.employee_contribution_value,
        employer_contribution_value:  requestBody. employer_contribution_value,
        employer_ec_value:requestBody.employer_ec_value,
        remarks: requestBody.remarks,
      
      
    });
  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readAllmst_mandatory_sss = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await mst_mandatory_sssRepository.viewmst_mandatory_sss();

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

export const updatemst_mandatory_Sss = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as mst_mandatory_sss;
    const targetLabel = await mst_mandatory_sssRepository.updatemst_mandatory_Sss(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deletemst_mandatory_Sss = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as mst_mandatory_sssID;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await mst_mandatory_sssRepository.deletemst_mandatory_Sss(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};

