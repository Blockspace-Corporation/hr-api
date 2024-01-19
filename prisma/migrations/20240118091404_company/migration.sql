-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccessToken` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expiry` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_code` VARCHAR(50) NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `sss_number` VARCHAR(50) NOT NULL,
    `phic_number` VARCHAR(50) NOT NULL,
    `hdmf_number` VARCHAR(50) NOT NULL,
    `tax_number` VARCHAR(50) NOT NULL,
    `current_year_id` INTEGER NOT NULL,
    `minimum_overtime_hours` DECIMAL(18, 5) NOT NULL,
    `create_by` INTEGER NOT NULL,
    `created_date` DATETIME(3) NOT NULL,
    `update_by` INTEGER NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `is_locked` BOOLEAN NOT NULL,
    `funding_account` VARCHAR(255) NOT NULL,
    `sss_account_id` INTEGER NOT NULL,
    `hdmf_account_id` INTEGER NOT NULL,
    `phic_account_id` INTEGER NOT NULL,
    `tax_account_id` INTEGER NOT NULL,
    `image_url` VARCHAR(4000) NOT NULL,
    `number_of_branches` INTEGER NOT NULL,
    `Requirements` VARCHAR(4000) NOT NULL,
    `is_special_holiday_without_logs` BOOLEAN NOT NULL,
    `is_overtime_taxabale` BOOLEAN NOT NULL,
    `is_restday_taxable` BOOLEAN NOT NULL,
    `is_night_diff_taxable` BOOLEAN NOT NULL,
    `is_premium_taxable` BOOLEAN NOT NULL,
    `is_holiday_taxable` BOOLEAN NOT NULL,
    `is_additional_allowance_taxable` BOOLEAN NOT NULL,
    `is_shown_non_taxable_income` BOOLEAN NOT NULL,
    `is_show_loan_balance` BOOLEAN NOT NULL,
    `is_shown_monthly_rate` BOOLEAN NOT NULL,
    `is_payroll_type_fixed_compute_as_variable` BOOLEAN NOT NULL,
    `is_show_approved_by` BOOLEAN NOT NULL,
    `is_show_daily_rate` BOOLEAN NOT NULL,
    `is_regular_holiday_included_sss_contribution` BOOLEAN NOT NULL,
    `is_overtime_convertible_to_leave_credits` BOOLEAN NOT NULL,
    `is_show_payslip_other_income_detail` BOOLEAN NOT NULL,
    `is_phic_computation_based_ON_payroll_rate` BOOLEAN NOT NULL,
    `is_thirteen_month_included_restday_pay` BOOLEAN NOT NULL,
    `is_thirteen_month_included_overtime_pay` BOOLEAN NOT NULL,
    `is_thirteen_month_included_special_holiday_pay` BOOLEAN NOT NULL,
    `is_thirteen_month_included_regular_holiday_pay` BOOLEAN NOT NULL,
    `is_thirteen_month_included_absent_deduction` BOOLEAN NOT NULL,
    `is_thirteen_month_included_late_deduction` BOOLEAN NOT NULL,
    `is_thirteen_month_included_undertime_deduction` BOOLEAN NOT NULL,
    `is_payslip_daily_rate_from_payrolline` BOOLEAN NOT NULL,
    `is_shown_holiday_amount_payslip` BOOLEAN NOT NULL,
    `is_multiple_breaks` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
