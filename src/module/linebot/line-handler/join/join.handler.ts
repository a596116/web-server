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
        await this.prisma.lineUser
          .create({
            data: {
              id: group.groupId,
              callback: '',
              status: true,
              url: '',
              type: group.type,
            },
          })
          .then((res) => {
            this.logger.log(`Join Group: ${group.groupId}`)
          })
          .catch((err) => {
            this.logger.log(`Join Group Error: ${group.groupId}`)
          })
      } else {
        await this.prisma.lineUser
          .update({
            where: { id: group.groupId },
            data: {
              status: true,
            },
          })
          .then((res) => {
            this.logger.log(`Update Join Group: ${group.groupId}`)
          })
          .catch((err) => {
            this.logger.log(`Update Join Group Error: ${group.groupId}`)
          })
      }
    } else {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: group.groupId } })
      if (exist) {
        await this.prisma.lineUser
          .update({
            where: { id: group.groupId },
            data: {
              status: false,
            },
          })
          .then((res) => {
            this.logger.log(`Leave Group: ${group.groupId}`)
          })
          .catch((err) => {
            this.logger.log(`Leave Group Error: ${group.groupId}`)
          })
      }
    }
  }
}
