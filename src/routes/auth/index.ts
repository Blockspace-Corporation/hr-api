import { FastifyPluginAsync } from "fastify";
import { IUserLoginRequestBody, IUserLoginResponseError, IUserLoginResponseSuccessful, IUserRegisterRequestBody, IUserRegisterResponseError, IUserRegisterResponseSucessful } from "../../schemas/AuthSchemas";
import { loginHandler, registerHandler } from "../../controllers/AuthControllers";

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IUserLoginRequestBody;
      Reply: IUserLoginResponseSuccessful | IUserLoginResponseError;
    }>('/login', loginHandler(fastify));
  
    fastify.post<{
      Querystring: IUserRegisterRequestBody;
      Reply: IUserRegisterResponseSucessful | IUserRegisterResponseError;
    }>('/register', registerHandler);
  
  };
  export default auth;