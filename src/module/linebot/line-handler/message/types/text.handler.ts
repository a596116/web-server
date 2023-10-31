import { Injectable } from '@nestjs/common'
import { MessageEventPayload } from '../../../interfaces/line.interface'
import { ContactAdminContext } from './text-context/contact-admin.context'
import { MessageAPIResponseBase } from '@line/bot-sdk'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { MappingContext } from '../../../lib/mapping-context'
import { menuTemplate } from '../templates/menu'
import { otherTemplate } from '../templates/other'
import { githubTemplate } from '../templates/github'
import { PrismaService } from 'src/module/prisma/prisma.service'
import { articleTemplate, findArticle } from '../templates/article'
import { findNike } from '../templates/nike'
import { findHypebeast } from '../templates/hypebeast'
import { findIthome } from '../templates/ithome'

@Injectable()
export class TextHandler {
  private readonly messageContext: object

  constructor(
    private readonly contactAdminContext: ContactAdminContext,
    private configService: ConfigService,
    private prisma: PrismaService
  ) {
    this.messageContext = {
      contactAdmin: this.contactAdminContext
    }
  }

  async handleByMessageType(messageEvent: MessageEventPayload): Promise<any> {
    const { replyToken } = messageEvent
    return await this.replyDefaultMessage(messageEvent)
      .catch(async err => {
        console.log(err)
        return await this.configService.createLinebotClient().replyMessage(replyToken, {
          type: 'text',
          text: '發生錯誤！'
        })
      })
  }

  private async replyDefaultMessage(messageEvent: MessageEventPayload): Promise<MessageAPIResponseBase> {
    const { message: { text }, replyToken, type, source: { userId } } = messageEvent
    if (type === 'message') {
      switch (text.replace(/^\s*|\s*$/g, "")) {
        case 'Menus': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, menuTemplate)
        }
        case 'Github': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, githubTemplate)
        }
        case 'Articles': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, await findArticle(userId))
        }
        case 'nike': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, await findNike(userId))
        }
        case 'hypebeast': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, await findHypebeast(userId))
        }
        case 'a': {
          return await this.configService.createLinebotClient().replyMessage(replyToken, await findIthome(userId))
        }

        case '?':
        case decodeURI('%EF%BC%9F'):
          return this.configService.createLinebotClient().replyMessage(replyToken, otherTemplate)

        case text.replace(/^\s*|\s*$/g, "").match(/^http/)?.input: {
          return await this.configService.createLinebotClient().replyMessage(replyToken, await articleTemplate(userId, text))
        }
        default: {
          const user = await this.prisma.lineUser.findFirst({ where: { id: userId } })
          if (user.callback && user.callback.match(/^(setting)/ig)[0] === 'setting') {
            switch (user.callback) {
              case 'setting新增': {
                // return await this.configService.createLinebotClient().replyMessage(replyToken, await settingAdd(userId, text))
              }
              case 'setting刪除': {
                // return await this.configService.createLinebotClient().replyMessage(replyToken, await settingDel(userId, text))
              }
            }
          } else {
            return await this.configService.createLinebotClient().replyMessage(replyToken, {
              type: 'text',
              text: '請嘗試其他功能！'
            })
          }
        }
      }
    }
  }
}
