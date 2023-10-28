import { Logger, Module } from '@nestjs/common'
import { LinebotService } from './linebot.service'
import { LinebotController } from './linebot.controller'
import { ConfigService } from './config/config.service'
import { MessageHandler } from './line-handler/message/message.handler.service'
import { TextHandler } from './line-handler/message/types/text.handler.service'
import { ImageHandler } from './line-handler/message/types/image.handler.service'
import { VideoHandler } from './line-handler/message/types/video.handler.service'
import { AudioHandler } from './line-handler/message/types/audio.handler.service'
import { LocationHandler } from './line-handler/message/types/location.handler.service'
import { StickerHandler } from './line-handler/message/types/sticker.handler.service'
import { PostbackHandler } from './line-handler/postback/postback.handler'
import { ContactAdminContext } from './line-handler/message/types/text-context/contact-admin.context'
import { PhotoPostBack } from './line-handler/postback/templates/photo'
import { FollowHandler } from './line-handler/follow/follow.handler'
import { SettingPostBack } from './line-handler/postback/templates/setting'
import { ArticlePostBack } from './line-handler/postback/templates/article'
import { FindArticlePostBack } from './line-handler/postback/templates/findarticle'
import { JoinHandler } from './line-handler/join/join.handler'

@Module({
  providers: [
    LinebotService,
    ConfigService,
    MessageHandler,
    TextHandler,
    ImageHandler,
    VideoHandler,
    AudioHandler,
    LocationHandler,
    StickerHandler,
    PostbackHandler,
    ContactAdminContext,
    PhotoPostBack,
    SettingPostBack,
    ArticlePostBack,
    FindArticlePostBack,
    FollowHandler,
    JoinHandler,
    Logger,
  ],
  controllers: [LinebotController],
})
export class LinebotModule {}
