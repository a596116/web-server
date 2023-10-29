import { Injectable, NestMiddleware } from '@nestjs/common'

@Injectable()
export class TimeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    console.log(req.body)
    next()
  }
}
