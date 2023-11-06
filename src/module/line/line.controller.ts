import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LineService } from './line.service'
import { IQuery } from 'src/common/interface/query.interface'

@Controller('line')
@ApiTags('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取所有Line用戶', description: '獲取所有用戶' })
  findAll(@Query() query: IQuery) {
    return this.lineService.findAll(query)
  }
}
