import { Controller, Get, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

@Controller('exception')
export class ExceptionController {
  @Get()
  async expection() {
    throw new NotFoundException('qweqwe')
  }

  @Get('status')
  async expectionStatus() {
    throw  new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is custom message'
    }, 403)
  }
}
