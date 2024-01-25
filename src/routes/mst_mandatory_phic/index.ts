import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
 
  registermst_mandatory_phic,
  readAllmst_mandatory_phic,
  updatemst_mandatory_phic,
  deletemst_mandatory_phic,
} from '../../controllers/mst_mandatory_phic';
import {mst_mandatory_phic } from '../../schemas/mst_mandatory_phic';

const mst_mandatory_phic: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: mst_mandatory_phic;
  }>('/', { onRequest: [fastify.authenticate] },registermst_mandatory_phic);


  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, updatemst_mandatory_phic);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, deletemst_mandatory_phic);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', { onRequest: [fastify.authenticate] }, readAllmst_mandatory_phic);
};

export default mst_mandatory_phic;
