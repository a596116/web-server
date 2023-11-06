import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { Cron } from '@nestjs/schedule'
import { broadcastNike } from '../templates/nike'
import { broadcastHypebeast } from '../templates/hypebeast'
import { broadcastIthome } from '../templates/ithome'

@Injectable()
export class ScheduleHandler {
  private readonly logger: Logger = new Logger('LineBot')
  constructor(private configService: ConfigService) {}

  @Cron('5 * * * *')
  async broadcastNike() {
    const { broadcastUsers, template } = await broadcastNike()
    if (template) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }

  @Cron('5 * * * *')
  async broadcastHypebeast() {
    const { broadcastUsers, template } = await broadcastHypebeast()
    if (template) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }

  @Cron('5 * * * *')
  async broadcastIthome() {
    const { broadcastUsers, template } = await broadcastIthome()
    if (template) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }
}
