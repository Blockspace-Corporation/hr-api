/*
  Warnings:

  - You are about to drop the column `date_endoded` on the `mst_year_leave_credit` table. All the data in the column will be lost.
  - Added the required column `date_encoded` to the `mst_year_leave_credit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mst_year_leave_credit` DROP COLUMN `date_endoded`,
    ADD COLUMN `date_encoded` DATETIME(3) NOT NULL;
