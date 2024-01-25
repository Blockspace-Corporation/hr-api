import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  mst_tax_exemptionHandler,
  readAllMst_tax_exemptions,
  updateMst_tax_exemptionHandler,
  deleteMst_tax_exemptionHandler,
} from '../../controllers/mst_tax_exemptionController';
import {
  mst_tax_exemptionRequestBody,
} from '../../schemas/mst_tax_exemptionSchema';

const mst_tax_exemption: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Querystring: mst_tax_exemptionRequestBody;
  }>('/createmst_tax_exemption', mst_tax_exemptionHandler)
 
  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  updateMst_tax_exemptionHandler);
  
  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  deleteMst_tax_exemptionHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/',  readAllMst_tax_exemptions);
};

export default mst_tax_exemption;
