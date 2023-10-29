import { Injectable } from '@nestjs/common'
import { TextHandler } from './types/text.handler.service'
import { ImageHandler } from './types/image.handler.service'
import { VideoHandler } from './types/video.handler.service'
import { AudioHandler } from './types/audio.handler.service'
import { LocationHandler } from './types/location.handler.service'
import { StickerHandler } from './types/sticker.handler.service'
import { MessageEvent } from '@line/bot-sdk'
import { ScheduleHandler } from './types/schedule.handler.service'

@Injectable()
export class MessageHandler {
  private readonly messageTypes: object
  constructor(
    private readonly textHandler: TextHandler,
    private readonly imageHandler: ImageHandler,
    private readonly videoHandler: VideoHandler,
    private readonly audioHandler: AudioHandler,
    private readonly locationHandler: LocationHandler,
    private readonly stickerHandler: StickerHandler,
    private readonly scheduleHandler: ScheduleHandler,
  ) {
    this.messageTypes = {
      text: this.textHandler,
      image: this.imageHandler,
      video: this.videoHandler,
      audio: this.audioHandler,
      location: this.locationHandler,
      sticker: this.stickerHandler,
    }
  }

  async handleByEvent(event: MessageEvent): Promise<any> {
    return await this.messageTypes[event.message.type].handleByMessageType(event)
  }
}
