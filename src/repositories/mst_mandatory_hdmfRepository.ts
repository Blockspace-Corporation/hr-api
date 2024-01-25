import prisma from '../db';
import mst_mandatory_hdmf from '../models/mst_mandatory_hdmf';

export default class mst_mandatory_hdmfRepository {
  static getmst_mandatory_hdmf = async (amount_start: number) => {
    const targetmst_mandatory_hdmf = await prisma.mst_mandatory_hdmf.findFirst({
      where: {
        amount_start: amount_start,
      },
    });

    if (!targetmst_mandatory_hdmf) {
      throw 'getmst_mandatory_hdmf: mst_mandatory_hdmf not found';
    }

    return targetmst_mandatory_hdmf;
  };
  static viewmst_mandatory_hdmf = async()=>{
    try {
      const allLabels = await prisma.mst_mandatory_hdmf.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updatmst_mandatory_hdmf = async (mst_mandatory_hdmfData: mst_mandatory_hdmf)=>{
    try{
      const updateLabel = await prisma.mst_mandatory_hdmf.update({
        where: {
          id: mst_mandatory_hdmfData.id,
        },
        data: {
          amount_start: mst_mandatory_hdmfData.amount_start,
          amount_end: mst_mandatory_hdmfData.amount_end,
          employee_contribution_percentage:mst_mandatory_hdmfData.employee_contribution_percentage,
          employer_contribution_percentage:mst_mandatory_hdmfData.employer_contribution_percentage,
          employee_contribution_value: mst_mandatory_hdmfData.employee_contribution_value,
          employer_contribution_value:mst_mandatory_hdmfData.employer_contribution_value,
          remarks:mst_mandatory_hdmfData.remarks
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deletemst_mandatory_hdmf = async (id:number) => {
    try {
      const deletemst_mandatory_hdmf = await prisma.mst_mandatory_hdmf.delete({
        where:{
          id:id
        }
      })
      return deletemst_mandatory_hdmf;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createmst_mandatory_hdmf = async (mst_mandatory_hdmfData: mst_mandatory_hdmf) => {
    try {
      await prisma.mst_mandatory_hdmf.create({
        data: {
          amount_start: mst_mandatory_hdmfData.amount_start,
          amount_end: mst_mandatory_hdmfData.amount_end,
          employee_contribution_percentage:mst_mandatory_hdmfData.employee_contribution_percentage,
          employer_contribution_percentage:mst_mandatory_hdmfData.employer_contribution_percentage,
          employee_contribution_value: mst_mandatory_hdmfData.employee_contribution_value,
          employer_contribution_value:mst_mandatory_hdmfData.employer_contribution_value,
          remarks:mst_mandatory_hdmfData.remarks
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}