import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware'

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService]
})
export class RoleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('user')
  }
}
