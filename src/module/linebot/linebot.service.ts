import { Injectable } from '@nestjs/common'
import { MessageHandler } from './line-handler/message/message.handler.service'
import { PostbackHandler } from './line-handler/postback/postback.handler'
import { FollowHandler } from './line-handler/follow/follow.handler'
import { WebhookEvent } from '@line/bot-sdk'
import { JoinHandler } from './line-handler/join/join.handler'

@Injectable()
export class LinebotService {
  private readonly lineEvents: object
  constructor(
    private readonly messageHandler: MessageHandler,
    private readonly postbackHandler: PostbackHandler,
    private readonly followHandler: FollowHandler,
    private readonly joinHandler: JoinHandler,
  ) {
    this.lineEvents = {
      message: this.messageHandler,
      follow: this.followHandler,
      unfollow: this.followHandler,
      join: this.joinHandler,
      leave: this.joinHandler,
      postback: this.postbackHandler,
      beacon: 'event type -> beacon',
    }
  }

  handleEvent(events: Array<WebhookEvent>) {
    // console.log(events)
    return events.map(async (event) => await this.lineEvents[event.type].handleByEvent(event))
  }
}
