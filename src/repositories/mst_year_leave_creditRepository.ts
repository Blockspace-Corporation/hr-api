import prisma from '../db';
import mst_year_leave_credit from '../models/mst_year_leave_credit';

export default class MstYearLeaveRepository {
  
  static getMstYearLeave= async (id: number) => {
    const targetMstYearLeave = await prisma.mst_year_leave_credit.findFirst({
        where: {
          id: id,
        },
      });
  
      if (!targetMstYearLeave) {
        throw 'ID not found: Year not found';
      }
  
      return targetMstYearLeave
      ;
    };

  static createMstYearLeave = async (userData: mst_year_leave_credit) => {
    try {

      await prisma.mst_year_leave_credit.create({
            data: { 
                date_encoded:userData.date_encoded,      
                year_id:userData.year_id,
                employee_id:userData. employee_id,
                leave_credits:userData. leave_credits,
                remarks:userData.remarks,
                leave_type:userData.leave_type,
            },
          });
          
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static registerMstYearLeave = async (userData: mst_year_leave_credit) => {
    try{
        const newMstYearLeave = await prisma.mst_year_leave_credit.create({
          data: {
            date_encoded:userData.date_encoded,      
            year_id:userData.year_id,
            employee_id:userData. employee_id,
            leave_credits:userData. leave_credits,
            remarks:userData.remarks,
            leave_type:userData.leave_type,

        },
        });
        return newMstYearLeave;
    }catch(error){
        throw String(error || 'Unknown error occurred.');
    }
}

  static viewYearLeave = async()=>{
    try {
      const allLabels = await prisma.mst_year_leave_credit.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  
  static updateYearLeave = async (userData: mst_year_leave_credit)=>{
    try{
      const updateLabel = await prisma.mst_year_leave_credit.update({
        where: {
          id: userData.id,
        },
        data: {
            date_encoded:userData.date_encoded,      
            year_id:userData.year_id,
            employee_id:userData. employee_id,
            leave_credits:userData. leave_credits,
            remarks:userData.remarks,
            leave_type:userData.leave_type,
    }
  });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }

  static deleteYearLeave = async (id:number) => {
    try {
      const deleteYearLeave = await prisma.mst_year_leave_credit.delete({
        where:{
          id:id
        }
      })
      return deleteYearLeave;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
}




