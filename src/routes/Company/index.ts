import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { companyHandler, updateCompanyHandler, deleteCompanyHandler, readAllCompany } from '../../controllers/CompanyControllers';
import { CompanyRequestBody } from '../../schemas/CompanySchemas';

const company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: CompanyRequestBody;
    }>('/', companyHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id', { onRequest: [fastify.authenticate] }, updateCompanyHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id', { onRequest: [fastify.authenticate] }, deleteCompanyHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/', { onRequest: [fastify.authenticate] }, readAllCompany);

};

export default company;
