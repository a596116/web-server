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
        await this.prisma.lineUser.create({
          data: {
            id: user.userId,
            callback: '',
            url: '',
            type: user.type,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
        this.logger.log(`Follow User: ${user.userId}`)
      }
    } else {
      const exist = await this.prisma.lineUser.findUnique({ where: { id: user.userId } })
      if (exist) {
        await this.prisma.lineUser.delete({ where: { id: user.userId } }).catch((e) => true)
        this.logger.log(`Unfollow User: ${user.userId}`)
      }
    }
  }
}
