import { mst_user } from "@prisma/client";
export interface MstYearRequestBody {
  year_code:                   string; 
  year:                        string
  date_start:                  Date;
  date_end:                    Date;
  is_closed:                   boolean;
  created_by:                  number;
  created_date:                Date;
  update_by:                   number;
  update_date:                 Date;
  is_locked:                   boolean;
  mst_users:                   mst_user[];  
  mst_user:                    mst_user[]; 
}

export interface MstYearResponseSuccessful {
    message: string;
}

export interface MstYearResponseError {
    status: number;
    message: string;
}
export interface IUserID {
    id: number;
  }


export interface MstYearResponseSuccessful {
    message: string;
}

export interface MstYearResponseError {
    status: number;
    message: string;
}
export interface MstYearID {
    id: number;
  }