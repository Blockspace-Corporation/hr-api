import {mst_employee} from "@prisma/client"

export interface mst_cityRequestBody {
    city: string;
    province: string;
    region: string;
    type: string;
    mst_employees: mst_employee[]
}

export interface Mst_cityID {
    id: number;
  }

