import { Module } from '@nestjs/common'
import { AuthModule } from './module/auth/auth.module'
import { UploadModule } from './module/upload/upload.module'
import { RoleModule } from './module/role/role.module'
import { LinebotModule } from './module/linebot/linebot.module'

@Module({
  imports: [AuthModule, UploadModule, RoleModule, LinebotModule],
})
export class AppModule { }
