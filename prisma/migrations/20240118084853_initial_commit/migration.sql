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
    `description` VARCHAR(255) NOT NULL,
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
