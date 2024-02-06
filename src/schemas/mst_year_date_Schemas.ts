import { mst_year } from "@prisma/client";

export interface MstYearDateRequestBody {
    year_id:   number
    year_date: Date
    branch:    string  
    data_type: string   
    remarks:   string   
    mst_year:  mst_year[];

}

export interface MstYearDateResponseSuccessful {
    message: string;
}

export interface MstYearDateResponseError {
    status: number;
    message: string;
}
export interface IUserID {
    id: number;
  }


export interface MstYearDateResponseSuccessful {
    message: string;
}

export interface MstYearDateResponseError {
    status: number;
    message: string;
}
export interface MstYearDate {
    id: number;
  }

export interface MstYearDateRequestBody {
    id: number;
  }