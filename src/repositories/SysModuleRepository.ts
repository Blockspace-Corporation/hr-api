import { sys_module } from '@prisma/client';
import prisma from '../db';
import SysModule from '../models/sysmodule';


export default class SysModuleRepository {
static createSysModule = async (userData: SysModule) => {
    try {
      const createSysModule = await prisma.sys_module.create({
        data:{
            module: userData.module,
            particulars: userData.particulars
        },
      });
      return createSysModule
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
  static getSysModule = async() =>{
    const getoneSysModule = await prisma.sys_module.findMany({});
    return getoneSysModule
  }
  static updateSysModule = async (userData: sys_module)=>{
    try{
      const updateLabel = await prisma.sys_module.update({
        where: {
          id: userData.id,
        },
        data: {
          module: userData.module,
          particulars: userData.particulars,
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteSysModule = async (id:number) => {
    try {
      const deleteSysModule = await prisma.sys_module.delete({
        where:{
          id:id
        }
      })
      return deleteSysModule;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }

}