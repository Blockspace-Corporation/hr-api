import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import * as bcrypt from 'bcrypt';
import { add, getUnixTime } from 'date-fns';
import {
  IUserLoginRequestBody,
  IUserRegisterRequestBody,
} from '../schemas/AuthSchemas';
import AuthRepository from '../repositories/AuthRepository';

export const loginHandler =
  (fastify: FastifyInstance) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    const requestBody = request.body as IUserLoginRequestBody;

    let targetUser: any;

    try {
      targetUser = await AuthRepository.getUserByUsername(requestBody.username);
    } catch (error) {
      console.error(`loginHandler: error trying to get user: ${error}`);
      return reply.badRequest('Invalid username or password.');
    }

    const isCorrectPassword = await bcrypt.compare(
      requestBody.password,
      targetUser.password
    );

    if (!isCorrectPassword) {
      return reply.badRequest('Invalid username or password.');
    }

    const tokenExpiryDateTime = add(new Date(), { hours: 2 });
    const userId = targetUser.id;

    const newAccessToken = fastify.jwt.sign({
      aud: userId,
      exp: getUnixTime(tokenExpiryDateTime),
    });

    return reply.send({
      accessToken: newAccessToken,
      data: targetUser
    });
  };

export const registerHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const requestBody = request.body as IUserRegisterRequestBody;

  if (
    !requestBody ||
    // !requestBody.company_id ||
    !requestBody.username ||
    !requestBody.password ||
    !requestBody.confirmPassword ||
    !requestBody.fullname ||
    !requestBody.phone_number ||
    // !requestBody.created_by ||
    !requestBody.create_date ||
    // !requestBody.updated_by ||
    !requestBody.update_date ||
    !requestBody.id_locked ||
    !requestBody
  ) {
    return reply.badRequest(
      `Invalid request body. Required fields: 
      'username', 
      'password', 
      'confirmPassword', 
      'fullname', 
      'phone_number', 
      'created_by', 
      'create_date', 
      'updated_by'
      'update_date', 
      'id_locked'`
    );
  }

  let existingUser: any;

  try {
    existingUser = await AuthRepository.getUserByUsername(requestBody.username);
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
   const createmstUser = await AuthRepository.createUser({
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


