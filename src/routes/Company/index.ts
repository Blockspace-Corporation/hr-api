import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import {
  registerHandler,
  readAllCompany,
  updateCompanyHandler,
  deleteCompanyHandler,
} from '../../controllers/CompanyControllers';
import {
 
  CompanyRequestBody,

} from '../../schemas/CompanySchemas';

const Company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: CompanyRequestBody;
  }>('/company',  registerHandler);

  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',updateCompanyHandler);

  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  deleteCompanyHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', readAllCompany);

};

export default Company;
