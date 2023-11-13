import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { Cron } from '@nestjs/schedule'
import { broadcastNike } from '../templates/nike'
import { broadcastHypebeast } from '../templates/hypebeast'
import { broadcastIthome } from '../templates/ithome'

@Injectable()
export class ScheduleHandler {
  constructor(private configService: ConfigService) {}

  @Cron('5 12 * * *')
  async broadcastNike() {
    const { broadcastUsers, template } = await broadcastNike()
    if (template[1].contents.contents.length) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }

  @Cron('5 */3 * * *')
  async broadcastHypebeast() {
    const { broadcastUsers, template } = await broadcastHypebeast()
    if (template[1].contents.contents.length) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }

  @Cron('5 */3 * * *')
  async broadcastIthome() {
    const { broadcastUsers, template } = await broadcastIthome()
    if (template[1].contents.contents.length) {
      for (const user of broadcastUsers) {
        await this.configService.createLinebotClient().pushMessage(user.id, template)
      }
    }
  }
}
