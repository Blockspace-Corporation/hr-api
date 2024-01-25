import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
 
  registermst_mandatory_sss,
  readAllmst_mandatory_sss,
  updatemst_mandatory_Sss,
  deletemst_mandatory_Sss,
} from '../../controllers/mst_mandatory_sss';
import {mst_mandatory_sss } from '../../schemas/mst_mandatory_sss';

const mst_mandatory_sss: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: mst_mandatory_sss;
  }>('/', { onRequest: [fastify.authenticate] },registermst_mandatory_sss);


  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, updatemst_mandatory_Sss);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', { onRequest: [fastify.authenticate] }, deletemst_mandatory_Sss);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', { onRequest: [fastify.authenticate] }, readAllmst_mandatory_sss);
};

export default mst_mandatory_sss;
