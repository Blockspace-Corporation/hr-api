import prisma from '../db';
import Mst_Mandatory_Sss from '../models/mst_mandatory_sss';


export default class mst_mandatory_sssRepository {
  static getMst_Mandatory_SssByAmount_start = async (amount_start: number) => {
    try {
      const targetmst_mandatory_sss = await prisma.mst_mandatory_sss.findFirst({
        where: {
          amount_start: amount_start,
        },
      });

      if (!targetmst_mandatory_sss) {
        throw new Error('getMst_Mandatory_PhicByAmount_start: Amount_start, amount_end,employee_contribution_value, employer_contribution_value, remarks, mployee_contribution_percentage, employer_contribution_percentage not found');
      }

      return targetmst_mandatory_sss;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static registermst_mandatory_sss = async (UserData: Mst_Mandatory_Sss) => {
    try {
      const newmst_mandatory_sss = await prisma.mst_mandatory_sss.create({
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            employer_ec_value:UserData.employer_ec_value,
            remarks:UserData.remarks,
           
        },
      });
      return newmst_mandatory_sss;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static viewmst_mandatory_sss = async () => {
    try {
      const allmst_mandatory_sss = await prisma.mst_mandatory_sss.findMany({});
      return allmst_mandatory_sss;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static updatemst_mandatory_Sss = async (UserData: Mst_Mandatory_Sss) => {
    try {
      const updatedmst_mandatory_sss = await prisma.mst_mandatory_sss.update({
        where: {
          id: UserData.id,
        },
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            employer_ec_value:UserData.employer_ec_value,
            remarks:UserData.remarks,
           
        },
      });
      return updatedmst_mandatory_sss;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static deletemst_mandatory_Sss = async (id: number) => {
    try {
      const deletedmst_mandatory_sss = await prisma.mst_mandatory_sss.delete({
        where: {
          id: id,
        },
      });
      return deletedmst_mandatory_sss;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

static createmst_mandatory_sss = async (UserData: Mst_Mandatory_Sss) => {
    try {
      await prisma.mst_mandatory_sss.create({
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            employer_ec_value:UserData.employer_ec_value,
            remarks:UserData.remarks,
            
        },
         
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}