import { Logger, Module } from '@nestjs/common'
import { LiffService } from './liff.service'
import { LiffController } from './liff.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [LiffService, Logger],
  controllers: [LiffController],
})
export class LiffModule {}
