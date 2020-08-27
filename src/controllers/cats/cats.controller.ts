import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import {CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService){}
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('profile')
  profile(): string[] {
    return  ['1']
  }

  @Get('req')
  req(@Req() request: Request):string {
    return  request.hostname
  }

  @Post('post/cars')
  createCars(): string {
    return 'This action adds a new cat';
  }

  @Get('post/car')
  @HttpCode(204)
  createCar() {
    return 'This action adds a new cat';
  }

  @Post('post/header')
  @Header('Cache-Control', 'max-age=1234560000')
  createHeader() {
    return 'post/header'
  }

  @Get('/redirect')
  @Redirect('https://nest.js.com', 301)
  getDirect(@Query('version') version) {
    if (version && version === '5') {
      return {
        url: 'http://www.baidu.com',
        statusCode: 302
      }
    }
  }

  @Get('params/:id/:uid')
  getParams(@Param() params): string {
    return `id=${params.id}, uid=${params.uid}`
  }

  @Get('async')
  async getAsync() : Promise<any[]> {
    return []
  }

  @Post('dto')
  async getDto(@Body() createCatDto: CreateCatDto) {
    return createCatDto.breed
  }

  @Get('express-res')
  expressRes(@Res() res: Response) {
    res.status(HttpStatus.OK).json([])
  }

  @Post('/add/cats')
  async postAddCats(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get('add/cats')
  async getAddCats(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
