import { Injectable, Logger } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { error, success } from 'src/common/helper'
import { LineBotSetting } from './interface/liff_setting.interface'

@Injectable()
export class LiffService {
  private readonly logger: Logger = new Logger('Liff')
  constructor(private prisma: PrismaService, private readonly config: ConfigService) {}

  /**
   * @description: 獲取設定
   * @param {string} id
   */
  async fetchLineBotSetting(id: string) {
    try {
      const data = await this.prisma.lineUser.findUnique({
        where: {
          id: id,
        },
      })
      const { nike_broadcast, hypebeast_broadcast, ithome_broadcast } = data
      const res = {
        nike_broadcast,
        hypebeast_broadcast,
        ithome_broadcast,
      }
      return success({ data: res, message: '獲取成功' })
    } catch (e) {
      this.logger.error(e)
      return error({ message: '獲取失敗' })
    }
  }

  /**
   * @description: 編輯設定
   */
  async editLineBotSetting(id: string, body: LineBotSetting) {
    const {
      nike_broadcast = false,
      hypebeast_broadcast = false,
      ithome_broadcast = false,
      displayName,
      pictureUrl,
    } = body
    const isExist = await this.prisma.lineUser.findUnique({
      where: {
        id: id,
      },
    })
    try {
      if (!isExist) {
        await this.prisma.lineUser.create({
          data: {
            id: id,
            displayName,
            pictureUrl,
            nike_broadcast,
            hypebeast_broadcast,
            ithome_broadcast,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
      } else {
        await this.prisma.lineUser.update({
          where: {
            id: id,
          },
          data: {
            displayName,
            pictureUrl,
            nike_broadcast,
            hypebeast_broadcast,
            ithome_broadcast,
          },
        })
      }
    } catch (e) {
      this.logger.error(e)
      return error({ message: '編輯失敗' })
    } finally {
      return success({ message: '編輯成功' })
    }
  }
}
