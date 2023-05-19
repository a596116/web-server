-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `RolePermission`;

-- DropIndex
DROP INDEX `RolePermission_roleId_fkey` ON `RolePermission`;

-- DropIndex
DROP INDEX `UserRole_roleId_fkey` ON `UserRole`;

-- DropIndex
DROP INDEX `UserRole_userId_fkey` ON `UserRole`;

-- AlterTable
ALTER TABLE `Permission` MODIFY `remark` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Role` MODIFY `remark` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
