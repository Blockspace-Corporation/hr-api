import prisma from '../db';
import MstUserModule from '../models/mst_user_module';

export default class MstUserModuleRepository {
static createMstUserModule = async (userData: MstUserModule) => {
    try {
      const createMstUserModule = await prisma.mst_user_module.create({
        data: {
            user_id: userData.user_id,
            Module_id: userData.Module_id,
            can_open: userData.can_open,
            can_add: userData.can_add,
            can_update: userData.can_update,
            can_lock: userData.can_lock,
            can_unlock: userData.can_unlock,
            can_delete: userData.can_delete,
            can_print: userData.can_print,
        
        },
      });
      return createMstUserModule
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
  static getMstUserModule = async() =>{
    const getMstUserModule = await prisma.mst_user_module.findMany({});
    return getMstUserModule
  }
  static updateMstUserModule = async (userData: MstUserModule)=>{
    try{
      const updateLabel = await prisma.mst_user_module.update({
        where: {
          id: userData.id,
        },
        data: {
            user_id: userData.user_id,
            Module_id: userData.Module_id,
            can_open: userData.can_open,
            can_add: userData.can_add,
            can_update: userData.can_update,
            can_lock: userData.can_lock,
            can_unlock: userData.can_unlock,
            can_delete: userData.can_delete,
            can_print: userData.can_print,
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteMstUserModule = async (id:number) => {
    try {
      const deleteMstUserModule = await prisma.mst_user_module.delete({
        where:{
          id:id
        }
      })
      return deleteMstUserModule;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }

}