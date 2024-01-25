import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_accountHandler,
  readAllMst_accounts,
  updateMst_accountHandler,
  deleteMst_accountHandler,
} from '../../controllers/mst_accountController';
import {
  mst_accountRequestBody,
} from '../../schemas/mst_accountSchema';

const mst_account: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Querystring: mst_accountRequestBody;
  }>('/createmst_account', mst_accountHandler)
 
  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  updateMst_accountHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  deleteMst_accountHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/',  readAllMst_accounts);
};

export default mst_account;
