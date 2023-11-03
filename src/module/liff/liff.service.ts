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
    return success({ data: res })
  }

  /**
   * @description: 編輯設定
   */
  editLineBotSetting(id: string, body: LineBotSetting) {
    const { nike_broadcast, hypebeast_broadcast, ithome_broadcast, displayName, pictureUrl } = body
    const isExist = this.prisma.lineUser.findUnique({
      where: {
        id: id,
      },
    })
    try {
      if (!isExist) {
        this.prisma.lineUser.create({
          data: {
            id: id,
            displayName,
            pictureUrl,
            nike_broadcast,
            hypebeast_broadcast,
            ithome_broadcast,
          },
        })
      } else {
        this.prisma.lineUser.update({
          where: {
            id: id,
          },
          data: {
            id: id,
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
