import {FastifyReply, FastifyRequest } from 'fastify';
import {

  IUserRegisterRequestBody,
  IUserID
} from '../schemas/mstUserSchemas';
import MstUserRepository from '../repositories/MstUserRepository';


export const registerHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as IUserRegisterRequestBody;
  if (
    !requestBody ||
    !requestBody.company_id ||
    !requestBody.username ||
    !requestBody.password ||       
    !requestBody.fullname ||  
    !requestBody.phone_number ||      
    !requestBody.create_date ||
    !requestBody.update_date ||
    !requestBody.id_locked ||
    !requestBody

  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 'company_id', 'username', 'password', 'fullname', 'phone_number', 'create_date',  'update_date', 'id_locked'`
    );
  }

 

  try {
    MstUserRepository.createUser({
      company_id: requestBody.company_id,
      username: requestBody.username,  
      password: requestBody.password,           
      fullname: requestBody.fullname,        
      phone_number:requestBody.phone_number,        
      created_by:requestBody.created_by,
      create_date:requestBody.create_date,
      updated_by:requestBody.updated_by,
      update_date:requestBody.update_date,
      id_locked:requestBody.id_locked,
    });

  } catch (error) {
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }

  return reply.send({
    message: 'Registration successful.',
  });
};

export const readOneUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {


  const requestParams = request.params as IUserRegisterRequestBody;
  if (!requestParams || !requestParams.id) {
    return reply.badRequest("Missing 'id' parameter in URL 'MstUser/:id'");
  }
  try {
    let id: number = Number(requestParams.id)
    const targetOneUser = await MstUserRepository.getOneUserId(
      id
    );

    if (!targetOneUser) {
      return reply.notFound('MstUser not found.');
    }

    return reply.send({ data: targetOneUser });
  } catch (error) {
    console.error(
      `Read One Mst User ID: error trying to read MstUser: ${error}`
    );
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const readAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const targetLabels = await MstUserRepository.viewUser();

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

export const updateUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const query = request.body as IUserRegisterRequestBody;
    const targetLabel = await MstUserRepository.updateUser(query);
    return reply.send(targetLabel);

  } catch (error) {
    console.error(`updateLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(String(error || 'Unknown error occurred.'));
  }
};

export const deleteUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const requestParams = request.params as IUserID;
    requestParams.id = Number(requestParams.id);
    if (!requestParams || !requestParams.id) {
      return reply.badRequest(
        "Missing or invalid request body. Required fields: 'id'"
      );
    }

    await MstUserRepository.deleteUser(requestParams.id);

    return reply.send({
      message: 'Label has been removed successfully.',
    });

  } catch (error) {
    console.error(`deleteLabelHandler: error trying to update label: ${error}`);
    reply.internalServerError(JSON.stringify(error));
  }
};

