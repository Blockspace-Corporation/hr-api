import { FastifyPluginAsync } from "fastify";
import { IUserLoginRequestBody, IUserLoginResponseError, IUserLoginResponseSuccessful,} from "../../schemas/AuthSchemas";
import { loginHandler } from "../../controllers/AuthControllers";

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IUserLoginRequestBody;
      Reply: IUserLoginResponseSuccessful | IUserLoginResponseError;
    }>('/login', loginHandler(fastify));
  
    // fastify.post<{
    //   Querystring: IUserRegisterRequestBody;
    //   Reply: IUserRegisterResponseSucessful | IUserRegisterResponseError;
    // }>('/register', registerHandler);
  
  };
  export default auth;