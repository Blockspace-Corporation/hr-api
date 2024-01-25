import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { addsysmoduleHandler, deleteSysModuleHandler, getSysModuleHandler, updateSysModuleandler } from '../../controllers/SysModuleController';
import { ISysModuleRequestBody } from '../../schemas/SysModuleSchemas';

const system_module: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.post<{
    Querystring: ISysModuleRequestBody;
  }>('/',  addsysmoduleHandler);

  fastify.put<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',updateSysModuleandler);

  fastify.delete<{
    Querystring: FastifyRequest;
    Reply: FastifyReply;
  }>('/:id',  deleteSysModuleHandler);

  fastify.get<{
    Querystring: FastifyRequest;
    Reply: FastifyReply
  }>('/', getSysModuleHandler);

};

export default system_module;
