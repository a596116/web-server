import { LineService } from './line.service'
import { Body, Controller, Get, Param, Put, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('ithome')
export class IThomeController {
  constructor(private readonly lineService: LineService) {}

  /**
   * @description: ithome
   */
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取ithome列表', description: '獲取ithome列表' })
  fetchAll(@Query() query: any) {
    return this.lineService.fetchIThomeAll(query)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取ithome', description: '獲取ithome' })
  fetch(@Param('id') id: number) {
    return this.lineService.fetchIThome(id)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '更新ithome', description: '更新ithome' })
  edit(@Body() data: any, @Param('id') id: number) {
    return this.lineService.editIThome(id, data)
  }
}
