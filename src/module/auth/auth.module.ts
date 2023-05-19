import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { HashPasswordMiddleware } from 'src/common/middleware/hash-password.middleware'
import { JwtStrategy } from '../strategy/jwt-strategy'

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          //设置加密使用的 secret
          secret: config.get('TOKEN_SECRET'),
          //过期时间
          signOptions: { expiresIn: '1d' },
        }
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule implements NestModule {
  /**
    * 中間建-密碼加密
    */
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashPasswordMiddleware)
      .forRoutes('auth/register')
    // .apply(HashPasswordMiddleware)
    // .forRoutes('auth/alter')
  }
}
