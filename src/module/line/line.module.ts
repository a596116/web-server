import { Module } from '@nestjs/common'
import { LineController } from './line.controller'
import { LineService } from './line.service'
import { NikeController } from './nike.controller'
import { HypeBeastController } from './hypebeast.controller'
import { IThomeController } from './ithome.controller'

@Module({
  controllers: [LineController, NikeController, HypeBeastController, IThomeController],
  providers: [LineService],
})
export class LineModule {}
