import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_mandatory_birHandler,
  readAllmst_mandatory_bir,
  updatemst_mandatory_birHandler,
  deletemst_mandatory_birHandler,
} from '../../controllers/mst_mandatory_birControllers';
import { mst_mandatory_birRequestBody } from '../../schemas/mst_mandatory_bir_Schemas';

const mst_mandatory_bir: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: mst_mandatory_birRequestBody;
  }>('/', { onRequest: [fastify.authenticate] },mst_mandatory_birHandler);


  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, updatemst_mandatory_birHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, deletemst_mandatory_birHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', { onRequest: [fastify.authenticate] }, readAllmst_mandatory_bir);
};

export default mst_mandatory_bir;