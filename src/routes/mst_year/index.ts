import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { registerHandler, updateYearHandler, deleteYearHandler, readAllYear } from '../../controllers/mst_year_Controller';
import { MstYearRequestBody } from '../../schemas/mst_year_Schemas';

const mst_year: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: MstYearRequestBody;
    }>('/mst_year', registerHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  updateYearHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  deleteYearHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/',  readAllYear);

};

export default mst_year;