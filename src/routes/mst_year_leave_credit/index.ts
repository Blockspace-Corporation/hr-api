import { FastifyPluginAsync,FastifyReply, FastifyRequest } from 'fastify';
import { registerHandler, updateYearLeaveHandler, deleteYearLeaveHandler, readAllYearLeave, readOneYearLeaveHandler} from '../../controllers/mst_year_leave_creditControllers';
import { MstYearLeaveRequestBody } from '../../schemas/mst_year_leave_credit_Schemas';

const mst_year_leave_credit: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  
    fastify.post<{
        Querystring: MstYearLeaveRequestBody;
    }>('/mst_year_leave', registerHandler);

    fastify.put<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  updateYearLeaveHandler);
  
    fastify.delete<{
        Querystring: FastifyRequest;
        Reply: FastifyReply;
    }>('/:id',  deleteYearLeaveHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
      }>('/:id', readOneYearLeaveHandler);

    fastify.get<{
        Querystring: FastifyRequest;
        Reply: FastifyReply
    }>('/',  readAllYearLeave);
};
export default mst_year_leave_credit;