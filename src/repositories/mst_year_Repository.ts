import prisma from '../db';
import mst_year from '../models/mst_year';


export default class MstYearRepository {

  static createMstYear = async (userData: mst_year) => {
    try {

      await prisma.mst_year.create({
            data: {
                year_code:userData.year_code,      
                year:userData.year,
                date_start:userData.date_start,
                date_end:userData.date_end,
                is_closed:Buffer.from(userData.is_closed),
                created_by:userData.created_by,
                created_date:userData.created_date,
                update_by:userData.update_by,
                update_date:userData.update_date,
                is_locked:userData.is_locked,

            },
          });
          
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static viewYear = async()=>{
    try {
      const allLabels = await prisma.mst_year.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateYear = async (userData: mst_year)=>{
    try{
      const updateLabel = await prisma.mst_year.update({
        where: {
          id: userData.id,
        },
        data: {
            year_code:userData.year_code,      
            year:userData.year,
            date_start:userData.date_start,
            date_end:userData.date_end,
            is_closed:userData.is_closed,
            created_by:userData.created_by,
            created_date:userData.created_date,
            update_by:userData.update_by,
            update_date:userData.update_date,
            is_locked:userData.is_locked,
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteYear = async (id:number) => {
    try {
      const deleteYear = await prisma.mst_year.delete({
        where:{
          id:id
        }
      })
      return deleteYear;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
}
