export interface CompanyRequestBody {
    company_code:                                   string         
    company:                                        string        
    address:                                        string        
    sss_number:                                     string         
    phic_number:                                    string         
    hdmf_number:                                    string         
    tax_number:                                     string       
    current_year_id:                                number
    minimum_overtime_hours:                         number
    create_by:                                      number
    created_date:                                   Date
    update_by:                                      number
    update_date:                                    Date
    is_locked:                                      boolean
    funding_account:                                string         
    sss_account_id:                                 number
    hdmf_account_id:                                number
    phic_account_id:                                number
    tax_account_id:                                 number
    image_url:                                      string         
    number_of_branches:                             number
    Requirements:                                   string         
    is_special_holiday_without_logs:                boolean
    is_overtime_taxabale:                           boolean
    is_restday_taxable:                             boolean
    is_night_diff_taxable:                          boolean
    is_premium_taxable:                             boolean
    is_holiday_taxable:                             boolean
    is_additional_allowance_taxable:                boolean
    is_shown_non_taxable_income:                    boolean
    is_show_loan_balance:                           boolean
    is_shown_monthly_rate:                          boolean
    is_payroll_type_fixed_compute_as_variable:      boolean
    is_show_approved_by:                            boolean
    is_show_daily_rate:                             boolean
    is_regular_holiday_included_sss_contribution:   boolean
    is_overtime_convertible_to_leave_credits:       boolean
    is_show_payslip_other_income_detail:            boolean
    is_phic_computation_based_on_payroll_rate:      boolean
    is_thirteen_month_included_restday_pay:         boolean
    is_thirteen_month_included_overtime_pay:        boolean
    is_thirteen_month_included_special_holiday_pay: boolean
    is_thirteen_month_included_regular_holiday_pay: boolean
    is_thirteen_month_included_absent_deduction:    boolean
    is_thirteen_month_included_late_deduction:      boolean
    is_thirteen_month_included_undertime_deduction: boolean
    is_payslip_daily_rate_from_payrolline:          boolean
    is_shown_holiday_amount_payslip:                boolean
    is_multiple_breaks:                             boolean
  }

export interface CompanyID {
    id: number
  }