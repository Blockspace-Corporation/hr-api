-- AlterTable
ALTER TABLE `company` MODIFY `image_url` VARCHAR(65535) NOT NULL,
    MODIFY `Requirements` VARCHAR(65535) NOT NULL;

-- AlterTable
ALTER TABLE `mst_account` MODIFY `description` VARCHAR(65535) NOT NULL;

-- AlterTable
ALTER TABLE `mst_employee` MODIFY `address` VARCHAR(65535) NOT NULL,
    MODIFY `remarks` VARCHAR(65535) NULL,
    MODIFY `Image_url` VARCHAR(65535) NOT NULL;

-- AlterTable
ALTER TABLE `mst_employee_history` MODIFY `old_value` VARCHAR(65535) NOT NULL,
    MODIFY `new_value` VARCHAR(65535) NOT NULL;

-- AlterTable
ALTER TABLE `mst_employee_memo` MODIFY `particulars` VARCHAR(65535) NOT NULL,
    MODIFY `attachment_url` VARCHAR(65535) NOT NULL;
