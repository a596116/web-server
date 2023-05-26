import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import ValidatePipe from './common/validate/validate.pipe'
import { json, urlencoded } from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, 'upload'), { prefix: '/upload' })

  app.useGlobalPipes(new ValidatePipe({ whitelist: true, transform: true }))


  app.use(json({ limit: '500mb' }))
  app.use(urlencoded({ limit: '500mb', extended: true }))

  app.setGlobalPrefix('api')
  /**
   * 跨域
  */
  app.enableCors({
    origin: '*',
  })

  /**
   * @description: Swagger
  */
  const options = new DocumentBuilder()
    .setTitle('浩呆後端')
    .setDescription('浩呆後端API文件')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }, 'jwt')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)


  await app.listen(3005, () => {
    console.log(`http://localhost:3005/api`)
    // logger.log(`${config.get<string>('BASE_URL')}/api`)
  })
}
bootstrap()
