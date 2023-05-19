import { Module } from '@nestjs/common'
import { AuthModule } from './module/auth/auth.module'
import { UploadModule } from './module/upload/upload.module'
import { RoleModule } from './module/role/role.module';

@Module({
  imports: [AuthModule, UploadModule, RoleModule],
})
export class AppModule { }
