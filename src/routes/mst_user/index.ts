import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { registerHandler, updateUserHandler, deleteUserHandler, readAllUsers, readOneUserHandler } from '../../controllers/MstUserControllers';
import { IUserRegisterRequestBody } from '../../schemas/mstUserSchemas';

const mst_user: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: IUserRegisterRequestBody;
    }>('/register', registerHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  updateUserHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  deleteUserHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/',  readAllUsers);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/:id',  readOneUserHandler);

};

export default mst_user;
