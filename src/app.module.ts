import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { UploadModule } from './module/upload/upload.module';
import { RoleModule } from './module/role/role.module';
import { LinebotModule } from './module/linebot/linebot.module';
import { Log4jsModule } from '@nestx-log4js/core';
import { getEnvPath } from './common/helper';
import { ConfigModule } from '@nestjs/config';
import configs from './config/index';

const envFilePath: string = getEnvPath(`../`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    ConfigModule.forRoot({ load: configs, isGlobal: true }),
    Log4jsModule.forRoot(),
    AuthModule,
    UploadModule,
    RoleModule,
    LinebotModule,
  ],
})
export class AppModule {}
