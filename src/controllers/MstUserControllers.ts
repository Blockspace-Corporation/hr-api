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

  switch (true) {
    case (requestBody.username == null || requestBody.username == ""):
      return reply.badRequest(`Invalid request body. Username is empty.`);
    case (requestBody.password == null || requestBody.password == ""):
      return reply.badRequest(`Invalid request body. Password is empty.`);
    case (requestBody.confirmPassword == null || requestBody.confirmPassword == ""):
      return reply.badRequest(`Invalid request body. Confirm Password is empty.`);
    case (requestBody.fullname == null || requestBody.fullname == ""):
      return reply.badRequest(`Invalid request body. Fullname is empty.`);
    case (requestBody.phone_number == null || requestBody.phone_number == ""):
      return reply.badRequest(`Invalid request body. Phone Number is empty.`);
    case (requestBody.create_date == null):
      return reply.badRequest(`Invalid request body. Created Date is empty.`);
    case (requestBody.update_date == null):
      return reply.badRequest(`Invalid request body. Updated Date is empty.`);
    default:
      break;
  }

  let existingUser: any;
    try {
      existingUser = await MstUserRepository.getUserByUsername(requestBody.username);
    } catch {
      // pass
    }
  
    if (existingUser) {
      return reply.badRequest('Username is already taken.');
    }
  
    const isMatchingPassword =
      requestBody.password === requestBody.confirmPassword;
  
    if (!isMatchingPassword) {
      return reply.badRequest('Passwords do not match');
    }
  
    try {
     const createmstUser = await MstUserRepository.createUser({
      //   company_id: requestBody.company_id,
        username: requestBody.username,
        password: requestBody.password,
        fullname: requestBody.fullname,
        phone_number: requestBody.phone_number,
      //   created_by: requestBody.created_by,
        create_date: requestBody.create_date,
      //   updated_by: requestBody.updated_by,
        update_date: requestBody.update_date,
        id_locked: requestBody.id_locked,
      });
      return reply.send({
        message: 'Registration successful.',
        data: createmstUser
      });
    } catch (error) {
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };

//   try {
//     MstUserRepository.createUser({
//       company_id: requestBody.company_id,
//       username: requestBody.username,  
//       password: requestBody.password,           
//       fullname: requestBody.fullname,        
//       phone_number:requestBody.phone_number,        
//       created_by:requestBody.created_by,
//       create_date:requestBody.create_date,
//       updated_by:requestBody.updated_by,
//       update_date:requestBody.update_date,
//       id_locked:requestBody.id_locked,
//     });

//   } catch (error) {
//     reply.internalServerError(String(error || 'Unknown error occurred.'));
//   }

//   return reply.send({
//     message: 'Registration successful.',
//   });
// };

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

