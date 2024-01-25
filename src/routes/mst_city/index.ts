import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_cityHandler,
  readAllMst_cities,
  updateMst_cityHandler,
  deleteMst_cityHandler,
} from '../../controllers/mst_cityController';
import {
  mst_cityRequestBody,
} from '../../schemas/mst_citySchema';

const mst_city: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Querystring: mst_cityRequestBody;
  }>('/createmst_city', mst_cityHandler)
 
  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  updateMst_cityHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  deleteMst_cityHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/',  readAllMst_cities);
};

export default mst_city;
