/*
  Warnings:

  - Added the required column `creator` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `RolePermission`;

-- DropIndex
DROP INDEX `RolePermission_roleId_fkey` ON `RolePermission`;

-- DropIndex
DROP INDEX `UserRole_roleId_fkey` ON `UserRole`;

-- DropIndex
DROP INDEX `UserRole_userId_fkey` ON `UserRole`;

-- AlterTable
ALTER TABLE `Role` ADD COLUMN `creator` VARCHAR(191) NOT NULL,
    ADD COLUMN `remark` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `creator` VARCHAR(191) NOT NULL,
    ADD COLUMN `remark` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
