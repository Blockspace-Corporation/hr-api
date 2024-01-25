import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  registerHandler,
  readAllUsers,
  updateUserHandler,
  deleteUserHandler,
} from '../../controllers/MstUserControllers';
import {
 
  IUserRegisterRequestBody,
  IUserRegisterResponseError,
  IUserRegisterResponseSucessful,
} from '../../schemas/mstUserSchemas';

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {



  


  fastify.post<{
    Querystring: IUserRegisterRequestBody;
    Reply: IUserRegisterResponseSucessful | IUserRegisterResponseError;
  }>('/createUser', registerHandler)
  

  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  updateUserHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', deleteUserHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/',  readAllUsers);
};

export default auth;
