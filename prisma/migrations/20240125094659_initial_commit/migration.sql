-- CreateTable
CREATE TABLE `mst_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `fullname` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(50) NOT NULL,
    `created_by` INTEGER NULL,
    `create_date` DATETIME(3) NOT NULL,
    `updated_by` INTEGER NULL,
    `update_date` DATETIME(3) NOT NULL,
    `id_locked` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_code` VARCHAR(50) NOT NULL,
    `id_number` VARCHAR(50) NOT NULL,
    `biometric_number` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `middle_name` VARCHAR(255) NOT NULL,
    `extension_name` VARCHAR(50) NOT NULL,
    `full_name` VARCHAR(255) NOT NULL,
    `address` LONGTEXT NOT NULL,
    `city_id` INTEGER NOT NULL,
    `zid_code` VARCHAR(50) NOT NULL,
    `contact_number` VARCHAR(50) NOT NULL,
    `contact_mobile_number` VARCHAR(50) NOT NULL,
    `email_adress` VARCHAR(255) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `place_of_birth` VARCHAR(255) NOT NULL,
    `sex` VARCHAR(50) NOT NULL,
    `civil_status` VARCHAR(50) NOT NULL,
    `citizenship` VARCHAR(50) NOT NULL,
    `height` DECIMAL(18, 5) NOT NULL,
    `weight` DECIMAL(18, 5) NOT NULL,
    `blood_type` VARCHAR(50) NOT NULL,
    `religion` VARCHAR(50) NOT NULL,
    `remarks` LONGTEXT NULL,
    `Image_url` LONGTEXT NOT NULL,
    `company_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_by` INTEGER NOT NULL,
    `created_date` DATETIME(3) NOT NULL,
    `update_by` INTEGER NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `is_locked` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee_payroll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `payroll_group` VARCHAR(50) NOT NULL,
    `payroll_type` VARCHAR(50) NOT NULL,
    `monthly_rate` DECIMAL(18, 5) NOT NULL,
    `payroll_rate` DECIMAL(18, 5) NOT NULL,
    `daily_rate` DECIMAL(18, 5) NOT NULL,
    `hourly_rate` DECIMAL(18, 5) NOT NULL,
    `absent_daily_rate` DECIMAL(18, 5) NOT NULL,
    `late_hourly_rate` DECIMAL(18, 5) NOT NULL,
    `undertime_hourly_rate` DECIMAL(18, 5) NOT NULL,
    `overtime_hourly_rate` DECIMAL(18, 5) NOT NULL,
    `night_different_rate` DECIMAL(18, 5) NOT NULL,
    `sss_number` VARCHAR(50) NOT NULL,
    `sss_add_on_amount` DECIMAL(18, 5) NOT NULL,
    `sss_computation_type` VARCHAR(50) NOT NULL,
    `hdfm_number` VARCHAR(50) NOT NULL,
    `hdfm_add_on_amount` DECIMAL(18, 5) NOT NULL,
    `hdfm_computation_type` VARCHAR(50) NOT NULL,
    `phic_number` VARCHAR(50) NOT NULL,
    `tin` VARCHAR(50) NOT NULL,
    `tax_table` VARCHAR(50) NOT NULL,
    `tax_exemption_id` INTEGER NOT NULL,
    `is_minimum_wage_earner` LONGBLOB NOT NULL,
    `atm_account_number` VARCHAR(50) NOT NULL,
    `cost_of_living_allowance` DECIMAL(18, 5) NOT NULL,
    `additional_allowance` DECIMAL(18, 5) NOT NULL,
    `account_id` INTEGER NULL,
    `number_of_working_days` DECIMAL(18, 5) NOT NULL,
    `mode_of_payment` VARCHAR(50) NOT NULL,
    `bank_name` VARCHAR(50) NOT NULL,
    `tax_add_on_amount` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee_hr` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `date_hired` DATETIME(3) NOT NULL,
    `date_regular` DATETIME(3) NOT NULL,
    `date_resigned` DATETIME(3) NOT NULL,
    `branch` VARCHAR(50) NOT NULL,
    `division` VARCHAR(50) NOT NULL,
    `department` VARCHAR(50) NOT NULL,
    `position` VARCHAR(50) NOT NULL,
    `default_shift_id` INTEGER NOT NULL,
    `employee_status` VARCHAR(255) NULL,
    `approver_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `access_token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(50) NOT NULL,
    `expiry` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_user_module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `Module_id` INTEGER NOT NULL,
    `can_open` BOOLEAN NOT NULL,
    `can_add` BOOLEAN NOT NULL,
    `can_update` BOOLEAN NOT NULL,
    `can_lock` BOOLEAN NOT NULL,
    `can_unlock` BOOLEAN NOT NULL,
    `can_delete` BOOLEAN NOT NULL,
    `can_print` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `module` VARCHAR(255) NOT NULL,
    `particulars` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_code_table` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(50) NOT NULL,
    `value` VARCHAR(50) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `created_by` INTEGER NULL,
    `created_date` DATETIME(3) NULL,
    `update_by` INTEGER NULL,
    `update_date` DATETIME(3) NULL,

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
    `image_url` LONGTEXT NOT NULL,
    `number_of_branches` INTEGER NOT NULL,
    `Requirements` LONGTEXT NOT NULL,
    `is_special_holiday_without_logs` BOOLEAN NOT NULL,
    `is_overtime_taxable` BOOLEAN NOT NULL,
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
    `is_phic_computation_based_on_payroll_rate` BOOLEAN NOT NULL,
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

-- CreateTable
CREATE TABLE `mst_city` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255) NOT NULL,
    `province` VARCHAR(255) NOT NULL,
    `region` VARCHAR(255) NOT NULL,
    `type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_code` VARCHAR(50) NOT NULL,
    `account_name` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `code` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_tax_exemption` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tax_exemption_code` VARCHAR(50) NOT NULL,
    `exemption_amount` DECIMAL(18, 5) NOT NULL,
    `dependent_amount` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_tax_exemption_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tax_exemption_id` INTEGER NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `amount` DECIMAL(18, 5) NOT NULL,
    `tax` DECIMAL(18, 5) NOT NULL,
    `percentage` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee_other_income` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `other_income_id` INTEGER NOT NULL,
    `amount` DECIMAL(18, 5) NOT NULL,
    `is_work_required` LONGBLOB NOT NULL,
    `is_active` LONGBLOB NOT NULL,
    `is_complete_attendance` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee_memo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `memo_code` VARCHAR(50) NOT NULL,
    `memo_date` DATETIME(3) NOT NULL,
    `particulars` LONGTEXT NOT NULL,
    `attachment_url` LONGTEXT NOT NULL,
    `attachment_type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_employee_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `history_code` VARCHAR(50) NOT NULL,
    `history_date` DATETIME(3) NOT NULL,
    `fieldname` VARCHAR(255) NOT NULL,
    `old_value` LONGTEXT NOT NULL,
    `new_value` LONGTEXT NOT NULL,
    `edited_by_user_id` INTEGER NOT NULL,
    `edited_time_stamp` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_employee_history_edited_by_user_id_key`(`edited_by_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_mandatory_bir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount_start` DECIMAL(18, 5) NOT NULL,
    `amount_end` DECIMAL(18, 5) NOT NULL,
    `employee_tax_percentage` DECIMAL(18, 5) NOT NULL,
    `employee_additional_amount` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_mandatory_hdmf` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount_start` DECIMAL(18, 5) NOT NULL,
    `amount_end` DECIMAL(18, 5) NOT NULL,
    `employee_contribution_percentage` DECIMAL(18, 5) NOT NULL,
    `employer_contribution_percentage` DECIMAL(18, 5) NOT NULL,
    `employee_contribution_value` DECIMAL(18, 5) NOT NULL,
    `employer_contribution_value` DECIMAL(18, 5) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_mandatory_phic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount_start` DECIMAL(18, 5) NOT NULL,
    `amount_end` DECIMAL(18, 5) NOT NULL,
    `employee_contribution_value` DECIMAL(18, 5) NOT NULL,
    `employer_contribution_value` DECIMAL(18, 5) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,
    `employee_contribution_percentage` DECIMAL(18, 5) NOT NULL,
    `employer_contribution_percentage` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_mandatory_sss` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount_start` DECIMAL(18, 5) NOT NULL,
    `amount_end` DECIMAL(18, 5) NOT NULL,
    `employee_contribution_value` DECIMAL(18, 5) NOT NULL,
    `employer_contribution_value` DECIMAL(18, 5) NOT NULL,
    `employer_ec_value` DECIMAL(18, 5) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `mst_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `mst_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee` ADD CONSTRAINT `mst_employee_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `mst_city`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee` ADD CONSTRAINT `mst_employee_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee` ADD CONSTRAINT `mst_employee_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee` ADD CONSTRAINT `mst_employee_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee` ADD CONSTRAINT `mst_employee_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_payroll` ADD CONSTRAINT `mst_employee_payroll_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `mst_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_payroll` ADD CONSTRAINT `mst_employee_payroll_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `mst_account`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_hr` ADD CONSTRAINT `mst_employee_hr_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `mst_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_hr` ADD CONSTRAINT `mst_employee_hr_approver_id_fkey` FOREIGN KEY (`approver_id`) REFERENCES `mst_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_Module_id_fkey` FOREIGN KEY (`Module_id`) REFERENCES `sys_module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_tax_exemption_detail` ADD CONSTRAINT `mst_tax_exemption_detail_tax_exemption_id_fkey` FOREIGN KEY (`tax_exemption_id`) REFERENCES `mst_tax_exemption`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_other_income` ADD CONSTRAINT `mst_employee_other_income_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `mst_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_history` ADD CONSTRAINT `mst_employee_history_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `mst_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_employee_history` ADD CONSTRAINT `mst_employee_history_edited_by_user_id_fkey` FOREIGN KEY (`edited_by_user_id`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
