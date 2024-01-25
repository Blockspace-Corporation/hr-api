import {mst_tax_exemption} from "@prisma/client"

export interface mst_tax_exemption_detailRequestBody {
    tax_exemption_id: number;   
    type: string;
    amount: number;
    tax: number;
    percentage: number;
    mst_tax_exemption: mst_tax_exemption[]
}

export interface Mst_tax_exemption_detailID {
    id: number;
  }

