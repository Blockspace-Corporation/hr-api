import { mst_user } from "@prisma/client";
import { sys_module } from "@prisma/client";
export interface IMstUserModuleRequestBody {
    id:             number;
    user_id:        number;
    Module_id:      number;
    mst_users:   mst_user[]
    can_open:       boolean;
    can_add:        boolean; 
    can_update:     boolean; 
    can_lock:       boolean; 
    can_unlock:     boolean; 
    can_delete:     boolean; 
    can_print:      boolean; 
    sys_modules: sys_module[]
}

export interface IMstUserModuleResponseSuccessful {
    message: string;
}

export interface IMstUserModuleResponseError {
    status: number;
    message: string;
}
export interface IUserID {
    id: number;
  }