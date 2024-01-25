import prisma from '../db';
import Mst_tax_exemption from '../models/mst_tax_exemption';

export default class mst_tax_exemptionRepository {
  static getMst_tax_exemptionBytax_exemption_code = async (tax_exemption_code: string) => {
    const targetMst_tax_exemption = await prisma.mst_tax_exemption.findFirst({
      where: {
        tax_exemption_code: tax_exemption_code,
      },
    });

    if (!targetMst_tax_exemption) {
      throw 'getMst_tax_exemptionBytax_exemption_code: Tax exemption code not found';
    }

    return targetMst_tax_exemption;
  };
  static viewMst_tax_exemption = async()=>{
    try {
      const allLabels = await prisma.mst_tax_exemption.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateMst_tax_exemption = async (mst_tax_exemptionData: Mst_tax_exemption)=>{
    try{
      const updateLabel = await prisma.mst_tax_exemption.update({
        where: {
          id: mst_tax_exemptionData.id,
        },
        data: {
          tax_exemption_code: mst_tax_exemptionData.tax_exemption_code,
          exemption_amount: mst_tax_exemptionData.exemption_amount,
          dependent_amount: mst_tax_exemptionData.dependent_amount,
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteMst_tax_exemption = async (id:number) => {
    try {
      const deleteMst_tax_exemption = await prisma.mst_tax_exemption.delete({
        where:{
          id:id
        }
      })
      return deleteMst_tax_exemption;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createMst_tax_exemption = async (mst_tax_exemptionData: Mst_tax_exemption) => {
    try {
      await prisma.mst_tax_exemption.create({
        data: {
         tax_exemption_code : mst_tax_exemptionData.tax_exemption_code,
         exemption_amount: mst_tax_exemptionData.exemption_amount,
         dependent_amount: mst_tax_exemptionData.dependent_amount,
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}