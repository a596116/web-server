import { Injectable, Logger } from '@nestjs/common'
import { Group, MessageEvent, User } from '@line/bot-sdk'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class FollowHandler {
  private readonly logger: Logger = new Logger('LineBot')
  constructor(private prisma: PrismaService) {}
  async handleByEvent(event: MessageEvent): Promise<any> {
    const user = event.source as User
    if (event.type.toString() === 'follow') {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: user.userId } })
      if (!exist) {
        await this.prisma.lineUser
          .create({
            data: {
              id: user.userId,
              callback: '',
              url: '',
              status: true,
              type: user.type,
            },
          })
          .then((res) => {
            this.logger.log(`Follow User: ${user.userId}`)
          })
          .catch((err) => {
            this.logger.log(`Follow User Error: ${user.userId}`)
          })
      } else {
        await this.prisma.lineUser
          .update({
            where: { id: user.userId },
            data: {
              status: true,
            },
          })
          .then((res) => {
            this.logger.log(`Update Follow User: ${user.userId}`)
          })
          .catch((err) => {
            this.logger.log(`Update Follow User Error: ${user.userId}`)
          })
      }
    } else {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: user.userId } })
      if (exist) {
        await this.prisma.lineUser
          .update({
            where: { id: user.userId },
            data: {
              status: false,
            },
          })
          .then((res) => {
            this.logger.log(`Unfollow User: ${user.userId}`)
          })
          .catch((err) => {
            this.logger.log(`Unfollow User Error: ${user.userId}`)
          })
      }
    }
  }
}
