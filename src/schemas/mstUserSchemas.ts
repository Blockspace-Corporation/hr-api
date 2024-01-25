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
  company_id:            number
  username:              string;
  password:              string;
  fullname:              string;
  phone_number:          string;
  created_by:            number;
  create_date:           Date;
  updated_by:            number;
  update_date:           Date;
  id_locked:             boolean;
 

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
