import { Injectable, Logger } from '@nestjs/common'
import { Group, MessageEvent } from '@line/bot-sdk'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class JoinHandler {
  private readonly logger: Logger = new Logger('LineBot')
  constructor(private prisma: PrismaService) {}
  async handleByEvent(event: MessageEvent): Promise<any> {
    const group = event.source as Group
    if (event.type.toString() === 'join') {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: group.groupId } })
      if (!exist) {
        await this.prisma.lineUser.create({
          data: {
            id: group.groupId,
            callback: '',
            url: '',
            type: group.type,
          },
        })
        this.logger.log(`Join Group: ${group.groupId}`)
      }
    } else {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: group.groupId } })
      if (exist) {
        await this.prisma.lineUser.delete({ where: { id: group.groupId } }).catch((e) => true)
        this.logger.log(`Leave Group: ${group.groupId}`)
      }
    }
  }
}
