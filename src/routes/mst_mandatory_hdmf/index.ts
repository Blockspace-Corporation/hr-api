import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_mandatory_hdmfHandler,
  readAllmst_mandatory_hdmf,
  updatemst_mandatory_hdmfHandler,
  deletemst_mandatory_hdmfHandler,
} from '../../controllers/mst_mandatory_hdmfControllers';
import { mst_mandatory_hdmfRequestBody } from '../../schemas/mst_mandatory_hdmf_Schemas';

const mst_mandatory_hdmf: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: mst_mandatory_hdmfRequestBody;
  }>('/', { onRequest: [fastify.authenticate] },mst_mandatory_hdmfHandler);


  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, updatemst_mandatory_hdmfHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, deletemst_mandatory_hdmfHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', { onRequest: [fastify.authenticate] }, readAllmst_mandatory_hdmf);
};

export default mst_mandatory_hdmf;