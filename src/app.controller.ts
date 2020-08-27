import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './controllers/cats/cats.service'
import { Cat } from './controllers/cats/interfaces/cat.interface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add/cats')
  async getAddCats(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
