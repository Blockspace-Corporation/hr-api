import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_tax_exemption_detailHandler,
  readAllMst_tax_exemption_details,
  updateMst_tax_exemption_detailHandler,
  deleteMst_tax_exemption_detailHandler,
} from '../../controllers/mst_tax_exemption_detailContoller';
import {
  mst_tax_exemption_detailRequestBody,
} from '../../schemas/mst_tax_exemption_detailSchema';

const mst_tax_exemption_detail: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Querystring: mst_tax_exemption_detailRequestBody;
  }>('/createmst_tax_exemption_detail', mst_tax_exemption_detailHandler)
 
  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  updateMst_tax_exemption_detailHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id', deleteMst_tax_exemption_detailHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', readAllMst_tax_exemption_details);
};

export default mst_tax_exemption_detail;
