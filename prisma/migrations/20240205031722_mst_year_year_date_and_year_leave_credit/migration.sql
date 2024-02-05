-- CreateTable
CREATE TABLE `mst_year` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year_code` VARCHAR(50) NOT NULL,
    `year` VARCHAR(50) NOT NULL,
    `date_start` DATETIME(3) NOT NULL,
    `date_end` DATETIME(3) NOT NULL,
    `is_closed` BOOLEAN NOT NULL,
    `created_by` INTEGER NOT NULL,
    `created_date` DATETIME(3) NOT NULL,
    `update_by` INTEGER NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `is_locked` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_year_date` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year_id` INTEGER NOT NULL,
    `year_date` DATETIME(3) NOT NULL,
    `branch` VARCHAR(50) NOT NULL,
    `data_type` VARCHAR(50) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_year_leave_credit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_endoded` DATETIME(3) NOT NULL,
    `year_id` INTEGER NOT NULL,
    `employee_id` INTEGER NOT NULL,
    `leave_credits` DECIMAL(18, 5) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,
    `leave_type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mst_year` ADD CONSTRAINT `mst_year_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_year` ADD CONSTRAINT `mst_year_update_by_fkey` FOREIGN KEY (`update_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_year_date` ADD CONSTRAINT `mst_year_date_year_id_fkey` FOREIGN KEY (`year_id`) REFERENCES `mst_year`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_year_leave_credit` ADD CONSTRAINT `mst_year_leave_credit_year_id_fkey` FOREIGN KEY (`year_id`) REFERENCES `mst_year`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_year_leave_credit` ADD CONSTRAINT `mst_year_leave_credit_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `mst_employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
