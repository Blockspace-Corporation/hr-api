-- CreateTable
CREATE TABLE `mst_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
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
CREATE TABLE `must_city` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255) NOT NULL,
    `province` VARCHAR(255) NOT NULL,
    `region` VARCHAR(255) NOT NULL,
    `type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `must_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_code` VARCHAR(50) NOT NULL,
    `account_name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(65535) NOT NULL,
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

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `mst_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `mst_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_Module_id_fkey` FOREIGN KEY (`Module_id`) REFERENCES `sys_module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
