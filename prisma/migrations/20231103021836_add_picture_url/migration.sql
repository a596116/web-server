/*
  Warnings:

  - You are about to drop the column `name` on the `lineuser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `lineuser` DROP COLUMN `name`,
    ADD COLUMN `displayName` VARCHAR(191) NULL,
    ADD COLUMN `pictureUrl` VARCHAR(191) NULL;
