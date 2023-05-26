/*
  Warnings:

  - You are about to drop the column `birthdat` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `birthdat`,
    ADD COLUMN `birthday` VARCHAR(191) NOT NULL;