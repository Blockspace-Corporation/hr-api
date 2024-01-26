import { mst_user_module } from "@prisma/client";
export interface ISysModuleRequestBody {
    id:             number;
    module:         string;
    particulars:    string;
    mst_users_modules: mst_user_module[]
}

export interface ISysModuleResponseSuccessful {
    message: string;
}

export interface ISysModuleResponseError {
    status: number;
    message: string;
}

