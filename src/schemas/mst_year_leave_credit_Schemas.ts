import { mst_year_leave_credit } from "@prisma/client";

export interface MstYearLeaveRequestBody {
    date_encoded:             Date
    year_id:                  number
    employee_id:              number
    leave_credits:            number     
    remarks:                  string      
    leave_type:               string
    mst_year_leave_credits:   mst_year_leave_credit[];
    mst_year_leave_credit:    mst_year_leave_credit[];        
}

export interface MstYearLeaveResponseSuccessful {
    message: string;
}

export interface MstYearLeaveResponseError {
    status: number;
    message: string;
}
export interface IUserID {
    id: number;
  }


export interface MstYearLeaveResponseSuccessful {
    message: string;
}

export interface MstYearLeaveResponseError {
    status: number;
    message: string;
}
export interface MstYearLeave {
    id: number;
  }

export interface MstYearLeaveRequestBody {
    id: number;
  }