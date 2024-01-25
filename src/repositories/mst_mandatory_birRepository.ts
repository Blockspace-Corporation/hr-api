import prisma from '../db';
import mst_mandatory_bir from '../models/mst_mandatory_bir';

export default class mst_mandatory_birRepository {
  static getmst_mandatory_bir = async (amount_start: number) => {
    const targetmst_mandatory_bir = await prisma.mst_mandatory_bir.findFirst({
      where: {
        amount_start: amount_start,
      },
    });

    if (!targetmst_mandatory_bir) {
      throw 'getmst_mandatory_bir: mst_mandatory_bir not found';
    }

    return targetmst_mandatory_bir;
  };
  static viewmst_mandatory_bir = async()=>{
    try {
      const allLabels = await prisma.mst_mandatory_bir.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updatemst_mandatory_bir = async (mst_mandatory_birData: mst_mandatory_bir)=>{
    try{
      const updateLabel = await prisma.mst_mandatory_bir.update({
        where: {
          id: mst_mandatory_birData.id,
        },
        data: {
          amount_start: mst_mandatory_birData.amount_start,
          amount_end: mst_mandatory_birData.amount_end,
          employee_tax_percentage:mst_mandatory_birData.employee_tax_percentage,
          employee_additional_amount:mst_mandatory_birData.employee_additional_amount
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deletemst_mandatory_bir = async (id:number) => {
    try {
      const deletemst_mandatory_bir = await prisma.mst_mandatory_bir.delete({
        where:{
          id:id
        }
      })
      return deletemst_mandatory_bir;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createmst_mandatory_bir = async (mst_mandatory_birData: mst_mandatory_bir) => {
    try {
      await prisma.mst_mandatory_bir.create({
        data: {
          amount_start: mst_mandatory_birData.amount_start,
          amount_end: mst_mandatory_birData.amount_end,
          employee_tax_percentage:mst_mandatory_birData.employee_tax_percentage,
          employee_additional_amount:mst_mandatory_birData.employee_additional_amount
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}