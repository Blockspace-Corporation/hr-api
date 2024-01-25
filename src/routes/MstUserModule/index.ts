import { FastifyPluginAsync } from "fastify";
import { IMstUserModuleRequestBody, IMstUserModuleResponseError, IMstUserModuleResponseSuccessful } from "../../schemas/MstUserModuleSchemas";
import { addmstusermoduleHandler, getmstusermoduleHandler, deletemstusermoduleHandler, updatemstusermoduleHandler } from "../../controllers/MstUserModuleControllers";



const MstUserModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IMstUserModuleRequestBody;
      Reply: IMstUserModuleResponseSuccessful | IMstUserModuleResponseError;
    }>('/', addmstusermoduleHandler);

    fastify.get<{
        Querystring: IMstUserModuleRequestBody;
        Reply: IMstUserModuleResponseSuccessful | IMstUserModuleResponseError;
      }>('/', getmstusermoduleHandler);

      fastify.put<{
        Querystring: IMstUserModuleRequestBody;
        Reply: IMstUserModuleResponseSuccessful | IMstUserModuleResponseError;
      }>('/:id', updatemstusermoduleHandler);

      fastify.delete<{
        Querystring: IMstUserModuleRequestBody;
        Reply: IMstUserModuleResponseSuccessful | IMstUserModuleResponseError;
      }>('/:id', deletemstusermoduleHandler);

};
export default MstUserModule;