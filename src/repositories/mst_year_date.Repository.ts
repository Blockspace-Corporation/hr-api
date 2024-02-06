import prisma from '../db';
import mst_year_date from '../models/mst_year_date';


export default class MstYearDateRepository {
  
  static getMstByYearDate = async (id: number) => {
    const targetMstYearDate = await prisma.mst_year_date.findFirst({
        where: {
          id: id,
        },
      });
  
      if (!targetMstYearDate) {
        throw 'ID not found: Year not found';
      }
  
      return targetMstYearDate;
    };

  static createMstYearDate = async (userData: mst_year_date) => {
    try {

      await prisma.mst_year_date.create({
            data: {
                year_id:userData.year_id,      
                year_date:userData.year_date,
                branch:userData.branch,
                data_type: userData.data_type,
                remarks:userData.remarks,
            },
          });
          
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static registerMstYearDate = async (userData: mst_year_date) => {
    try{
        const newMstYearDate = await prisma.mst_year_date.create({
          data: {
            year_id:userData.year_id,      
            year_date:userData.year_date,
            branch:userData.branch,
            data_type: userData.data_type,
            remarks:userData.remarks,

        },
        });
        return newMstYearDate;
    }catch(error){
        throw String(error || 'Unknown error occurred.');
    }
}

  static viewYearDate = async()=>{
    try {
      const allLabels = await prisma.mst_year_date.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  
  static updateYearDate = async (userData: mst_year_date)=>{
    try{
      const updateLabel = await prisma.mst_year_date.update({
        where: {
          id: userData.id,
        },
        data: {
            year_id:userData.year_id,      
            year_date:userData.year_date,
            branch:userData.branch,
            data_type: userData.data_type,
            remarks:userData.remarks,
      },
    });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }

  static deleteYearDate = async (id:number) => {
    try {
      const deleteYearDate = await prisma.mst_year_date.delete({
        where:{
          id:id
        }
      })
      return deleteYearDate;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
}
