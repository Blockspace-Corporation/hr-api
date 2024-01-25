import prisma from '../db';
import Mst_Mandatory_Phic from '../models/mst_mandatory_phic';


export default class mst_mandatory_phicRepository {
  static getMst_Mandatory_PhicByAmount_start = async (amount_start: number) => {
    try {
      const targetmst_mandatory_phic = await prisma.mst_mandatory_phic.findFirst({
        where: {
          amount_start: amount_start,
        },
      });

      if (!targetmst_mandatory_phic) {
        throw new Error('getMst_Mandatory_PhicByAmount_start: Amount_start, amount_end,employee_contribution_value, employer_contribution_value, remarks, mployee_contribution_percentage, employer_contribution_percentage not found');
      }

      return targetmst_mandatory_phic;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static registermst_mandatory_phic = async (UserData: Mst_Mandatory_Phic) => {
    try {
      const newmst_mandatory_phic = await prisma.mst_mandatory_phic.create({
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            remarks:UserData.remarks,
            employee_contribution_percentage:UserData.employer_contribution_percentage,
            employer_contribution_percentage:UserData.employer_contribution_percentage,
        },
      });
      return newmst_mandatory_phic;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static viewmst_mandatory_phic = async () => {
    try {
      const allmst_mandatory_phic = await prisma.mst_mandatory_phic.findMany({});
      return allmst_mandatory_phic;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static updatemst_mandatory_phic = async (UserData: Mst_Mandatory_Phic) => {
    try {
      const updatedmst_mandatory_phic = await prisma.mst_mandatory_phic.update({
        where: {
          id: UserData.id,
        },
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            remarks:UserData.remarks,
            employee_contribution_percentage:UserData.employer_contribution_percentage,
            employer_contribution_percentage:UserData.employer_contribution_percentage,
        },
      });
      return updatedmst_mandatory_phic;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static deletemst_mandatory_phic = async (id: number) => {
    try {
      const deletedmst_mandatory_ = await prisma.mst_mandatory_phic.delete({
        where: {
          id: id,
        },
      });
      return deletedmst_mandatory_;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

static createmst_mandatory_phic = async (UserData: Mst_Mandatory_Phic) => {
    try {
      await prisma.mst_mandatory_phic.create({
        data: {
            amount_start: UserData.amount_start,
            amount_end: UserData. amount_end,
            employee_contribution_value: UserData.employee_contribution_value,
            employer_contribution_value: UserData. employer_contribution_value,
            remarks:UserData.remarks,
            employee_contribution_percentage:UserData.employer_contribution_percentage,
            employer_contribution_percentage:UserData.employer_contribution_percentage,
        },
         
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}