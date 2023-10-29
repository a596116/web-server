/*
  Warnings:

  - You are about to alter the column `createdAt` on the `lineuser` table. The data in that column could be lost. The data in that column will be cast from `DateTime(6)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `lineuser` MODIFY `createdAt` DATETIME(3) NOT NULL;
