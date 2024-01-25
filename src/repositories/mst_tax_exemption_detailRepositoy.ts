import prisma from '../db';
import Mst_tax_exemption_detail from '../models/mst_tax_exemption_detail';

export default class mst_tax_exemption_detailRepository {
  static getMst_tax_exemption_detailBytax_exemption_id = async (tax_exemption_id: number) => {
    const targetMst_tax_exemption_detail = await prisma.mst_tax_exemption_detail.findFirst({
      where: {
        tax_exemption_id: tax_exemption_id,
      },
    });

    if (!targetMst_tax_exemption_detail) {
      throw 'getMst_tax_exemption_detailBytax_exemption_code: Tax exemption code not found';
    }

    return targetMst_tax_exemption_detail;
  };
  static viewMst_tax_exemption_detail = async()=>{
    try {
      const allLabels = await prisma.mst_tax_exemption_detail.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateMst_tax_exemption_detail = async (mst_tax_exemption_detailData: Mst_tax_exemption_detail)=>{
    try{
      const updateLabel = await prisma.mst_tax_exemption_detail.update({
        where: {
          id: mst_tax_exemption_detailData.id,
        },
        data: {
          tax_exemption_id: mst_tax_exemption_detailData.tax_exemption_id,
          type: mst_tax_exemption_detailData.type,
          amount: mst_tax_exemption_detailData.amount,
          tax: mst_tax_exemption_detailData.tax,
          percentage: mst_tax_exemption_detailData.percentage
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteMst_tax_exemption_detail = async (id:number) => {
    try {
      const deleteMst_tax_exemption_detail = await prisma.mst_tax_exemption_detail.delete({
        where:{
          id:id
        }
      })
      return deleteMst_tax_exemption_detail;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createMst_tax_exemption_detail = async (mst_tax_exemption_detailData: Mst_tax_exemption_detail) => {
    try {
      await prisma.mst_tax_exemption_detail.create({
        data: {
          tax_exemption_id: mst_tax_exemption_detailData.tax_exemption_id,
          type: mst_tax_exemption_detailData.type,
          amount: mst_tax_exemption_detailData.amount,
          tax: mst_tax_exemption_detailData.tax,
          percentage: mst_tax_exemption_detailData.percentage
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}