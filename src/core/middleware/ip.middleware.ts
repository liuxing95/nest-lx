import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction} from 'express'

@Injectable()
export class IpMiddlerware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress
    console.log(`记录当前访问的ip为${ip}`)
    next()
  }
}