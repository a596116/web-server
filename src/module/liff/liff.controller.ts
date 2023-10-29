import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { LiffService } from './liff.service'
import { LineBotSetting } from './interface/liff_setting.interface'

@Controller('liff')
export class LiffController {
  constructor(private readonly liffService: LiffService) {}

  @Get('setting/:id')
  fetchLineBotSetting(@Param('id') id: string) {
    return this.liffService.fetchLineBotSetting(id)
  }

  @Put('setting/:id')
  editLineBotSetting(@Param('id') id: string, @Body() body: LineBotSetting) {
    return this.liffService.editLineBotSetting(id, body)
  }
}
