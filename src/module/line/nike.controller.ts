import { LineService } from './line.service'
import { Body, Controller, Get, Param, Put, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('nike')
export class NikeController {
  constructor(private readonly lineService: LineService) {}

  /**
   * @description: nike
   */
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取nike列表', description: '獲取nike列表' })
  fetchNikeAll(@Query() query: any) {
    return this.lineService.fetchNikeAll(query)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取nike', description: '獲取nike' })
  fetchNike(@Param('id') id: number) {
    return this.lineService.fetchNike(id)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '更新nike', description: '更新nike' })
  editNike(@Body() data: any, @Param('id') id: number) {
    return this.lineService.editNike(id, data)
  }
}
