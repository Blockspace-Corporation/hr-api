import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { registerHandler, updateUserHandler, deleteUserHandler, readAllUsers } from '../../controllers/MstUserControllers';
import { IUserRegisterRequestBody } from '../../schemas/mstUserSchemas';

const mst_user: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: IUserRegisterRequestBody;
    }>('/', registerHandler);

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

};

export default mst_user;