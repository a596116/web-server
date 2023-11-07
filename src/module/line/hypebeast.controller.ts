import { LineService } from './line.service'
import { Body, Controller, Get, Param, Put, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('hypebeast')
export class HypeBeastController {
  constructor(private readonly lineService: LineService) {}

  /**
   * @description: hypebeast
   */
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取hypebeast列表', description: '獲取hypebeast列表' })
  fetchAll(@Query() query: any) {
    return this.lineService.fetchHypeBeastAll(query)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取hypebeast', description: '獲取hypebeast' })
  fetch(@Param('id') id: number) {
    return this.lineService.fetchHypeBeast(id)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '更新hypebeast', description: '更新hypebeast' })
  edit(@Body() data: any, @Param('id') id: number) {
    return this.lineService.editHypeBeast(id, data)
  }
}
