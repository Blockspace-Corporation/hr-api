import {mst_employee_payroll} from "@prisma/client"

export interface mst_accountRequestBody {
    account_code: string;
    account_name: string;
    description: string;
    code: string;
    mst_employees_payroll: mst_employee_payroll[]
}

export interface Mst_accountID {
    id: number;
  }

