import {mst_tax_exemption_detail} from "@prisma/client"

export interface mst_tax_exemptionRequestBody {
    tax_exemption_code: string;                     
    exemption_amount: number;
    dependent_amount: number; 
    mst_tax_exemption_detail: mst_tax_exemption_detail[]
}

export interface Mst_tax_exemptionID {
    id: number;
  }