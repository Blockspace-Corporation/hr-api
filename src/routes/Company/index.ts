import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { companyHandler, updateCompanyHandler, deleteCompanyHandler, readAllCompany,readOneCompanyHandler} from '../../controllers/CompanyControllers';
import { CompanyRequestBody } from '../../schemas/CompanySchemas';

const Company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: CompanyRequestBody;
    }>('/', companyHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  updateCompanyHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  deleteCompanyHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
      }>('/:id', readOneCompanyHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/',  readAllCompany);

};

export default Company;