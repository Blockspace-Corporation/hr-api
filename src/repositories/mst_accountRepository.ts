import prisma from '../db';
import Mst_account from '../models/mst_account';

export default class mst_accountRepository {
  static getMst_accountByaccount_code = async (account_code: string) => {
    const targetMst_account = await prisma.mst_account.findFirst({
      where: {
        account_code: account_code,
      },
    });

    if (!targetMst_account) {
      throw 'getMst_accountByaccount_code: Account code not found';
    }

    return targetMst_account;
  };
  static viewMst_account = async()=>{
    try {
      const allLabels = await prisma.mst_account.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateMst_account = async (mst_accountData: Mst_account)=>{
    try{
      const updateLabel = await prisma.mst_account.update({
        where: {
          id: mst_accountData.id,
        },
        data: {
          account_code: mst_accountData.account_code,
          account_name: mst_accountData.account_name,
          description: mst_accountData.description,
          code: mst_accountData.code
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteMst_account = async (id:number) => {
    try {
      const deleteMst_account = await prisma.mst_account.delete({
        where:{
          id:id
        }
      })
      return deleteMst_account;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createMst_account = async (mst_accountData: Mst_account) => {
    try {
      await prisma.mst_account.create({
        data: {
            account_code: mst_accountData.account_code,
            account_name: mst_accountData.account_name,
            description: mst_accountData.description,
            code: mst_accountData.code
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}