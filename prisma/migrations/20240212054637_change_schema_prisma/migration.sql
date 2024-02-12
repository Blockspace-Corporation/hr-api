-- AlterTable
ALTER TABLE `company` MODIFY `current_year_id` INTEGER NULL,
    MODIFY `minimum_overtime_hours` DECIMAL(18, 5) NULL,
    MODIFY `is_locked` BOOLEAN NULL,
    MODIFY `number_of_branches` INTEGER NULL,
    MODIFY `Requirements` LONGTEXT NULL;
