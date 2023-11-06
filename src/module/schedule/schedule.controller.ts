import { Controller, Get } from '@nestjs/common'
import { ScheduleService } from './schedule.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('schedule')
@ApiTags('定時任務')
export class ScheduleController {
  constructor(private readonly ScheduleService: ScheduleService) {}

  @Get()
  fetchNike(): string {
    this.ScheduleService.handleFetchNike()
    return 'FetchNike'
  }

  @Get()
  fetchHypeBeast(): string {
    this.ScheduleService.handleFetchHypebeast()
    return 'FetchHypebeast'
  }

  @Get()
  fetchIthome(): string {
    this.ScheduleService.handleFetchIthome()
    return 'FetchIthome'
  }
}
