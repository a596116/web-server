import { WebhookRequestBody } from '@line/bot-sdk'
import { Body, Controller, Post } from '@nestjs/common'
import { LinebotService } from './linebot.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('linebot')
@ApiTags('linebot')
export class LinebotController {
  constructor(private readonly LinebotService: LinebotService) {}

  @Post()
  async handler(@Body() { events }: WebhookRequestBody) {
    return this.LinebotService.handleEvent(events)
  }
}
