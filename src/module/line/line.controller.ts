import { Body, Controller, Get, Param, Put, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LineService } from './line.service'
import { IQuery } from 'src/common/interface/query.interface'
import { ILineUser } from './interface/line.interface'

@Controller('line')
@ApiTags('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  /**
   * @description: 用戶列表
   */
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取所有Line用戶', description: '獲取所有用戶' })
  fetchAll(@Query() query: IQuery) {
    return this.lineService.fetchAll(query)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取Line用戶id', description: '獲取Line用戶id' })
  fetchLineUser(@Param('id') id: string) {
    return this.lineService.fetchLineUser(id)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '更新Line用戶', description: '更新Line用戶' })
  editLineUser(@Body() data: ILineUser, @Param('id') id: string) {
    return this.lineService.editLineUser(id, data)
  }

  /**
   * @description: nike
   */
  @Get('nike')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取nike列表', description: '獲取nike列表' })
  fetchNikeAll(@Query() query: IQuery) {
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
