import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { registerHandler, updateYearDateHandler, deleteYearDateHandler, readAllYearDate, readOneYearDateHandler} from '../../controllers/mst_year_date_Controller';
import { MstYearDateRequestBody } from '../../schemas/mst_year_date_Schemas';

const mst_year_date: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: MstYearDateRequestBody;
    }>('/mst_year_date', registerHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  updateYearDateHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  deleteYearDateHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
      }>('/:id', readOneYearDateHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/',  readAllYearDate);
};
export default mst_year_date;