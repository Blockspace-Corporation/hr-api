-- AlterTable
ALTER TABLE `company` MODIFY `is_premium_taxable` BOOLEAN NULL,
    MODIFY `is_overtime_convertible_to_leave_credits` BOOLEAN NULL,
    MODIFY `is_payslip_daily_rate_from_payrolline` BOOLEAN NULL,
    MODIFY `is_shown_holiday_amount_payslip` BOOLEAN NULL,
    MODIFY `is_multiple_breaks` BOOLEAN NULL;
