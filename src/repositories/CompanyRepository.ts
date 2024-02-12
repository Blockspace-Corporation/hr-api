import prisma from '../db';
import Company from '../models/Company';

export default class CompanyRepository {
    static getCompanyById = async (companyId: number) => {
        const targetCompany = await prisma.company.findFirst({
          where: {
            id: companyId,
          },
        });
    
        if (!targetCompany) {
          throw 'getEmployeeById: User not found';
        }
    
        return targetCompany;
    };
    static getCompanyByID = async (id: number) => {
      const targetCompany = await prisma.company.findFirst({
        where: {
          id: id,
        },
      });
  
      if (!targetCompany) {
        throw 'ID not found: Company not found';
      }
  
      return targetCompany;
    };
        
      static registerCompany = async (companyData: Company) => {
        try{
          const newCompany = await prisma.company.create({
            data: {
                company_code:companyData.company_code,
                company:companyData.company,
                address:companyData.address,
                sss_number:companyData.sss_number,
                phic_number:companyData.phic_number,
                hdmf_number:companyData.hdmf_number,
                tax_number:companyData.tax_number,
                // current_year_id:companyData.current_year_id,
                // minimum_overtime_hours:companyData. minimum_overtime_hours,                        
                create_by:companyData.create_by,                                     
                created_date:companyData.created_date,                               
                update_by:companyData.update_by,                                     
                update_date:companyData.update_date,                         
                // is_locked:companyData.is_locked,                                    
                funding_account:companyData.funding_account,                                    
                sss_account_id:companyData.sss_account_id,                                 
                hdmf_account_id:companyData.hdmf_account_id,                               
                phic_account_id:companyData.phic_account_id,                                
                tax_account_id:companyData.tax_account_id,                                 
                image_url:companyData.image_url,                                    
                // number_of_branches:companyData.number_of_branches,                          
                // Requirements:companyData.Requirements,                                   
                is_special_holiday_without_logs:companyData.is_special_holiday_without_logs,                
                is_overtime_taxable:companyData.is_overtime_taxable,                           
                is_restday_taxable:companyData.is_restday_taxable,                             
                is_night_diff_taxable:companyData.is_night_diff_taxable,                         
                // is_premium_taxable:companyData.is_premium_taxable,                            
                is_holiday_taxable:companyData.is_holiday_taxable, 
                is_additional_allowance_taxable:companyData.is_additional_allowance_taxable,                          
                is_shown_non_taxable_income:companyData.is_shown_non_taxable_income,                   
                is_show_loan_balance:companyData.is_show_loan_balance,                           
                is_shown_monthly_rate:companyData.is_shown_monthly_rate,                          
                is_payroll_type_fixed_compute_as_variable:companyData.is_payroll_type_fixed_compute_as_variable,      
                is_show_approved_by:companyData.is_show_approved_by,                            
                is_show_daily_rate:companyData.is_show_daily_rate,                             
                is_regular_holiday_included_sss_contribution:companyData.is_regular_holiday_included_sss_contribution,  
                // is_overtime_convertible_to_leave_credits:companyData.is_overtime_convertible_to_leave_credits,       
                is_show_payslip_other_income_detail:companyData.is_show_payslip_other_income_detail,            
                is_phic_computation_based_on_payroll_rate:companyData.is_phic_computation_based_on_payroll_rate,      
                is_thirteen_month_included_restday_pay:companyData.is_thirteen_month_included_restday_pay,
                is_thirteen_month_included_overtime_pay:companyData.is_thirteen_month_included_overtime_pay,       
                is_thirteen_month_included_special_holiday_pay:companyData.is_thirteen_month_included_special_holiday_pay,
                is_thirteen_month_included_regular_holiday_pay:companyData.is_thirteen_month_included_regular_holiday_pay, 
                is_thirteen_month_included_absent_deduction:companyData.is_thirteen_month_included_absent_deduction,    
                is_thirteen_month_included_late_deduction:companyData.is_thirteen_month_included_late_deduction,      
                is_thirteen_month_included_undertime_deduction:companyData.is_thirteen_month_included_undertime_deduction,
                // is_payslip_daily_rate_from_payrolline:companyData.is_payslip_daily_rate_from_payrolline,
                // is_shown_holiday_amount_payslip:companyData.is_shown_holiday_amount_payslip,              
                // is_multiple_breaks:companyData.is_multiple_breaks,                           
            },
          });
          return newCompany;
        }catch(error){
          throw String(error || 'Unknown error occurred.');
        }
      }

    static createCompany = async (companyData: Company) => {
        try{
         await prisma.company.create({
             data:{
                 company_code:companyData.company_code,
                 company:companyData.company,
                 address:companyData.address,
                 sss_number:companyData.sss_number,
                 phic_number:companyData.phic_number,
                 hdmf_number:companyData.hdmf_number,
                 tax_number:companyData.tax_number,
                //  current_year_id:companyData.current_year_id,
                //  minimum_overtime_hours:companyData. minimum_overtime_hours,                        
                 create_by:companyData.create_by,                                     
                 created_date:companyData.created_date,                               
                 update_by:companyData.update_by,                                     
                 update_date:companyData.update_date,                         
                //  is_locked:companyData.is_locked,                                    
                 funding_account:companyData.funding_account,                                    
                 sss_account_id:companyData.sss_account_id,                                 
                 hdmf_account_id:companyData.hdmf_account_id,                               
                 phic_account_id:companyData.phic_account_id,                                
                 tax_account_id:companyData.tax_account_id,                                 
                 image_url:companyData.image_url,                                    
                //  number_of_branches:companyData.number_of_branches,                          
                //  Requirements:companyData.Requirements,                                   
                 is_special_holiday_without_logs:companyData.is_special_holiday_without_logs,                
                 is_overtime_taxable:companyData.is_overtime_taxable,                           
                 is_restday_taxable:companyData.is_restday_taxable,                             
                 is_night_diff_taxable:companyData.is_night_diff_taxable,                         
                //  is_premium_taxable:companyData.is_premium_taxable,                            
                 is_holiday_taxable:companyData.is_holiday_taxable, 
                 is_additional_allowance_taxable:companyData.is_additional_allowance_taxable,                          
                 is_shown_non_taxable_income:companyData.is_shown_non_taxable_income,                   
                 is_show_loan_balance:companyData.is_show_loan_balance,                           
                 is_shown_monthly_rate:companyData.is_shown_monthly_rate,                          
                 is_payroll_type_fixed_compute_as_variable:companyData.is_payroll_type_fixed_compute_as_variable,      
                 is_show_approved_by:companyData.is_show_approved_by,                            
                 is_show_daily_rate:companyData.is_show_daily_rate,                             
                 is_regular_holiday_included_sss_contribution:companyData.is_regular_holiday_included_sss_contribution,  
                //  is_overtime_convertible_to_leave_credits:companyData.is_overtime_convertible_to_leave_credits,       
                 is_show_payslip_other_income_detail:companyData.is_show_payslip_other_income_detail,            
                 is_phic_computation_based_on_payroll_rate:companyData.is_phic_computation_based_on_payroll_rate,      
                 is_thirteen_month_included_restday_pay:companyData.is_thirteen_month_included_restday_pay,
                 is_thirteen_month_included_overtime_pay:companyData.is_thirteen_month_included_overtime_pay,       
                 is_thirteen_month_included_special_holiday_pay:companyData.is_thirteen_month_included_special_holiday_pay,
                 is_thirteen_month_included_regular_holiday_pay:companyData.is_thirteen_month_included_regular_holiday_pay, 
                 is_thirteen_month_included_absent_deduction:companyData.is_thirteen_month_included_absent_deduction,    
                 is_thirteen_month_included_late_deduction:companyData.is_thirteen_month_included_late_deduction,      
                 is_thirteen_month_included_undertime_deduction:companyData.is_thirteen_month_included_undertime_deduction,
                //  is_payslip_daily_rate_from_payrolline:companyData.is_payslip_daily_rate_from_payrolline,
                //  is_shown_holiday_amount_payslip:companyData.is_shown_holiday_amount_payslip,              
                //  is_multiple_breaks:companyData.is_multiple_breaks,                           

             },
         });
        }catch(error){
         throw String(error || 'Unknown error occurred.');
        }
            
     }
    
    static viewCompany = async()=>{
        try {
          const allCompany = await prisma.company.findMany({})
    
          return allCompany;
        } catch (error) {
          throw String(error || 'Unknown error occurred.');
        }
      }
    static updateCompany= async (companyData: Company)=>{
        try{
          const updateCompany = await prisma.company.update({
            where: {
              id: companyData.id,
            },
            data: {
                company_code:companyData.company_code,
                company:companyData.company,
                address:companyData.address,
                sss_number:companyData.sss_number,
                phic_number:companyData.phic_number,
                hdmf_number:companyData.hdmf_number,
                tax_number:companyData.tax_number,
                // current_year_id:companyData.current_year_id,
                // minimum_overtime_hours:companyData. minimum_overtime_hours,                        
                create_by:companyData.create_by,                                     
                created_date:companyData.created_date,                               
                update_by:companyData.update_by,                                     
                update_date:companyData.update_date,                         
                // is_locked:companyData.is_locked,                                    
                funding_account:companyData.funding_account,                                    
                sss_account_id:companyData.sss_account_id,                                 
                hdmf_account_id:companyData.hdmf_account_id,                               
                phic_account_id:companyData.phic_account_id,                                
                tax_account_id:companyData.tax_account_id,                                 
                image_url:companyData.image_url,                                    
                // number_of_branches:companyData.number_of_branches,                          
                // Requirements:companyData.Requirements,                                   
                is_special_holiday_without_logs:companyData.is_special_holiday_without_logs,                
                is_overtime_taxable:companyData.is_overtime_taxable,                           
                is_restday_taxable:companyData.is_restday_taxable,                             
                is_night_diff_taxable:companyData.is_night_diff_taxable,                         
                // is_premium_taxable:companyData.is_premium_taxable,                            
                is_holiday_taxable:companyData.is_holiday_taxable, 
                is_additional_allowance_taxable:companyData.is_additional_allowance_taxable,                          
                is_shown_non_taxable_income:companyData.is_shown_non_taxable_income,                   
                is_show_loan_balance:companyData.is_show_loan_balance,                           
                is_shown_monthly_rate:companyData.is_shown_monthly_rate,                          
                is_payroll_type_fixed_compute_as_variable:companyData.is_payroll_type_fixed_compute_as_variable,      
                is_show_approved_by:companyData.is_show_approved_by,                            
                is_show_daily_rate:companyData.is_show_daily_rate,                             
                is_regular_holiday_included_sss_contribution:companyData.is_regular_holiday_included_sss_contribution,  
                // is_overtime_convertible_to_leave_credits:companyData.is_overtime_convertible_to_leave_credits,       
                is_show_payslip_other_income_detail:companyData.is_show_payslip_other_income_detail,            
                is_phic_computation_based_on_payroll_rate:companyData.is_phic_computation_based_on_payroll_rate,      
                is_thirteen_month_included_restday_pay:companyData.is_thirteen_month_included_restday_pay,
                is_thirteen_month_included_overtime_pay:companyData.is_thirteen_month_included_overtime_pay,       
                is_thirteen_month_included_special_holiday_pay:companyData.is_thirteen_month_included_special_holiday_pay,
                is_thirteen_month_included_regular_holiday_pay:companyData.is_thirteen_month_included_regular_holiday_pay, 
                is_thirteen_month_included_absent_deduction:companyData.is_thirteen_month_included_absent_deduction,    
                is_thirteen_month_included_late_deduction:companyData.is_thirteen_month_included_late_deduction,      
                is_thirteen_month_included_undertime_deduction:companyData.is_thirteen_month_included_undertime_deduction,
                // is_payslip_daily_rate_from_payrolline:companyData.is_payslip_daily_rate_from_payrolline,
                // is_shown_holiday_amount_payslip:companyData.is_shown_holiday_amount_payslip,              
                // is_multiple_breaks:companyData.is_multiple_breaks,    
            },
          });
          return updateCompany;
        }catch(error){
          throw String(error || 'Unknown error occurred.');
        }
      }
    static deleteCompany = async (id:number) => {
        try {
          const deleteCompany = await prisma.company.delete({
            where:{
              id:id
            }
          })
          return deleteCompany;
        } catch (error) {
          throw String(error || 'Unknown error occurred.');
        }
      }
}