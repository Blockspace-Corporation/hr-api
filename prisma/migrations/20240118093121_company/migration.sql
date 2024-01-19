/*
  Warnings:

  - You are about to alter the column `image_url` on the `company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(4000)` to `VarChar(255)`.
  - You are about to alter the column `Requirements` on the `company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(4000)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `company` MODIFY `image_url` VARCHAR(255) NOT NULL,
    MODIFY `Requirements` VARCHAR(255) NOT NULL;
