import { mst_user, mst_user_module, mst_employee, mst_employee_hr, mst_employee_history, Company } from "@prisma/client";

export interface IUserLoginRequestBody {
  username: string;
  password: string;
}
export interface IUserLoginResponseSuccessful {
  accessToken: string;
}
export interface IUserLoginResponseError {
  status: number;
  message: string;
}

export interface IUserRegisterRequestBody {
  id:                    number;
  // company_id:            number;
  username:              string;
  password:              string;
  confirmPassword:       string;
  fullname:              string;
  phone_number:          string;
  // created_by:            number;
  create_date:           Date;
  // updated_by:            number;
  update_date:           Date;
  id_locked:             boolean;
  created:               mst_user[]
updated:               mst_user[]
mst_users_modules:     mst_user_module[]
  mst_employees:         mst_employee[]
  created_mst_employees: mst_employee[]      
  updated_mst_employees: mst_employee[]       
  mst_employee_hr:       mst_employee_hr[]
  mst_employee_history:  mst_employee_history[]
  Company:               Company[]          
 

}
export interface IUserRegisterResponseSucessful {
  message: string;
}
export interface IUserRegisterResponseError {
  status: number;
  message: string;
}

export interface IUserID {
  id: number;
}
