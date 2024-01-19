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
    `employeer_contribution_value` DECIMAL(18, 5) NOT NULL,
    `employee_ec_value` DECIMAL(18, 5) NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
