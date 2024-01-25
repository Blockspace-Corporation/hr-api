import { FastifyReply, FastifyRequest } from 'fastify';
import { CompanyID, CompanyRequestBody} from '../schemas/CompanySchemas';
import CompanyRepository from '../repositories/CompanyRepository';

export const companyHandler =async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const requestBody = request.body as CompanyRequestBody;
    if (!requestBody ||
        !requestBody.company_code || 
        !requestBody.company || 
        !requestBody.address ||        
        !requestBody.sss_number ||      
        !requestBody.phic_number ||      
        !requestBody.hdmf_number ||       
        !requestBody.tax_number ||    
        !requestBody.current_year_id || 
        !requestBody.minimum_overtime_hours || 
        !requestBody.create_by || 
        !requestBody.created_date || 
        !requestBody.update_by || 
        !requestBody.update_date || 
        !requestBody.is_locked || 
        !requestBody.funding_account ||     
        !requestBody.sss_account_id || 
        !requestBody.hdmf_account_id || 
        !requestBody.phic_account_id || 
        !requestBody.tax_account_id || 
        !requestBody.image_url ||        
        !requestBody.number_of_branches || 
        !requestBody.Requirements ||        
        !requestBody.is_special_holiday_without_logs || 
        !requestBody.is_overtime_taxabale || 
        !requestBody.is_restday_taxable || 
        !requestBody.is_night_diff_taxable || 
        !requestBody.is_premium_taxable || 
        !requestBody.is_holiday_taxable || 
        !requestBody.is_additional_allowance_taxable || 
        !requestBody.is_shown_non_taxable_income || 
        !requestBody.is_show_loan_balance || 
        !requestBody.is_shown_monthly_rate || 
        !requestBody.is_payroll_type_fixed_compute_as_variable || 
        !requestBody.is_show_approved_by || 
        !requestBody.is_show_daily_rate || 
        !requestBody.is_regular_holiday_included_sss_contribution || 
        !requestBody.is_overtime_convertible_to_leave_credits || 
        !requestBody.is_show_payslip_other_income_detail || 
        !requestBody.is_phic_computation_based_on_payroll_rate || 
        !requestBody.is_thirteen_month_included_restday_pay || 
        !requestBody.is_thirteen_month_included_overtime_pay || 
        !requestBody.is_thirteen_month_included_special_holiday_pay || 
        !requestBody.is_thirteen_month_included_regular_holiday_pay || 
        !requestBody.is_thirteen_month_included_absent_deduction || 
        !requestBody.is_thirteen_month_included_late_deduction || 
        !requestBody.is_thirteen_month_included_undertime_deduction || 
        !requestBody.is_payslip_daily_rate_from_payrolline || 
        !requestBody.is_shown_holiday_amount_payslip || 
        !requestBody.is_multiple_breaks || 
        !requestBody){
    
   return reply.badRequest(
            `Invalid request body. Required fields: 
            company_code,                                        
            company,                                               
            address,                                               
            sss_number,                                          
            phic_number,                                       
            hdmf_number,                                          
            tax_number,                                         
            current_year_id,                                
            minimum_overtime_hours,                        
            create_by,                                      
            created_date,                                 
            update_by,                                     
            update_date,                                    
            is_locked,                                     
            funding_account,                                        
            sss_account_id,                                 
            hdmf_account_id,                               
            phic_account_id,                                
            tax_account_id,                                 
            image_url,                                             
            number_of_branches,                            
            Requirements,                                          
            is_special_holiday_without_logs,              
            is_overtime_taxabale,                          
            is_restday_taxable,                             
            is_night_diff_taxable,                         
            is_premium_taxable,                             
            is_holiday_taxable,                           
            is_additional_allowance_taxable,               
            is_shown_non_taxable_income,                    
            is_show_loan_balance,                           
            is_shown_monthly_rate,                          
            is_payroll_type_fixed_compute_as_variable,      
            is_show_approved_by,                          
            is_show_daily_rate,                             
            is_regular_holiday_included_sss_contribution,   
            is_overtime_convertible_to_leave_credits,       
            is_show_payslip_other_income_detail,           
            is_phic_computation_based_on_payroll_rate,    
            is_thirteen_month_included_restday_pay,        
            is_thirteen_month_included_overtime_pay,        
            is_thirteen_month_included_special_holiday_pay,
            is_thirteen_month_included_regular_holiday_pay, 
            is_thirteen_month_included_absent_deduction,   
            is_thirteen_month_included_late_deduction,   
            is_thirteen_month_included_undertime_deduction,
            is_payslip_daily_rate_from_payrolline,         
            is_shown_holiday_amount_payslip,              
            is_multiple_breaks`);
        }
        try {
            await CompanyRepository.createCompany({
            company_code:requestBody.company_code,
            company:requestBody.company,
            address:requestBody.address,
            sss_number:requestBody.sss_number,
            phic_number:requestBody.phic_number,
            hdmf_number:requestBody.hdmf_number,
            tax_number:requestBody.tax_number,
            current_year_id:requestBody.current_year_id,
            minimum_overtime_hours:requestBody. minimum_overtime_hours,                        
            create_by:requestBody.create_by,                                     
            created_date:requestBody.created_date,                               
            update_by:requestBody.update_by,                                     
            update_date:requestBody.update_date,                         
            is_locked:requestBody.is_locked,                                    
            funding_account:requestBody.funding_account,                                    
            sss_account_id:requestBody.sss_account_id,                                 
            hdmf_account_id:requestBody.hdmf_account_id,                               
            phic_account_id:requestBody.phic_account_id,                                
            tax_account_id:requestBody.tax_account_id,                                 
            image_url:requestBody.image_url,                                    
            number_of_branches:requestBody.number_of_branches,                          
            Requirements:requestBody.Requirements,                                   
            is_special_holiday_without_logs:requestBody.is_special_holiday_without_logs,                
            is_overtime_taxabale:requestBody.is_overtime_taxabale,                           
            is_restday_taxable:requestBody.is_restday_taxable,                             
            is_night_diff_taxable:requestBody.is_night_diff_taxable,                         
            is_premium_taxable:requestBody.is_premium_taxable,                            
            is_holiday_taxable:requestBody.is_holiday_taxable, 
            is_additional_allowance_taxable:requestBody.is_additional_allowance_taxable,                          
            is_shown_non_taxable_income:requestBody.is_shown_non_taxable_income,                   
            is_show_loan_balance:requestBody.is_show_loan_balance,                           
            is_shown_monthly_rate:requestBody.is_shown_monthly_rate,                          
            is_payroll_type_fixed_compute_as_variable:requestBody.is_payroll_type_fixed_compute_as_variable,      
            is_show_approved_by:requestBody.is_show_approved_by,                            
            is_show_daily_rate:requestBody.is_show_daily_rate,                             
            is_regular_holiday_included_sss_contribution:requestBody.is_regular_holiday_included_sss_contribution,  
            is_overtime_convertible_to_leave_credits:requestBody.is_overtime_convertible_to_leave_credits,       
            is_show_payslip_other_income_detail:requestBody.is_show_payslip_other_income_detail,            
            is_phic_computation_based_on_payroll_rate:requestBody.is_phic_computation_based_on_payroll_rate,      
            is_thirteen_month_included_restday_pay:requestBody.is_thirteen_month_included_restday_pay,
            is_thirteen_month_included_overtime_pay:requestBody.is_thirteen_month_included_overtime_pay,       
            is_thirteen_month_included_special_holiday_pay:requestBody.is_thirteen_month_included_special_holiday_pay,
            is_thirteen_month_included_regular_holiday_pay:requestBody.is_thirteen_month_included_regular_holiday_pay, 
            is_thirteen_month_included_absent_deduction:requestBody.is_thirteen_month_included_absent_deduction,    
            is_thirteen_month_included_late_deduction:requestBody.is_thirteen_month_included_late_deduction,      
            is_thirteen_month_included_undertime_deduction:requestBody.is_thirteen_month_included_undertime_deduction,
            is_payslip_daily_rate_from_payrolline:requestBody.is_payslip_daily_rate_from_payrolline,
            is_shown_holiday_amount_payslip:requestBody.is_shown_holiday_amount_payslip,              
            is_multiple_breaks:requestBody.is_multiple_breaks,  
        
        });
    } catch (error) {
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  
    return reply.send({
      message: 'Registration successful.',
    });                         
}

export const readAllCompany = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
  
      const targetCompany = await CompanyRepository.viewCompany();
  
      return reply.send({
        labels: targetCompany,
      });
    } catch (error) {
      console.error(
        `readAllCompanyHandler: error trying to read labels: ${error}`
      );
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const updateCompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as CompanyRequestBody;
      const targetCompany = await CompanyRepository.updateCompany(query);
      return reply.send(targetCompany);
  
    } catch (error) {
      console.error(`updateCompanyHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  
  export const deleteCompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as CompanyID;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await CompanyRepository.deleteCompany(requestParams.id);
  
      return reply.send({
        message: 'Company has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteCompanyHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
