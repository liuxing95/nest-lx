import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './controllers/cats/cats.module';
import { DatabaseModule } from './controllers/database/database.module';
import { LoggerMiddleware, IpMiddlerware } from './core';
import { ExceptionModule } from './controllers/exception/exception.module';

@Module({
  imports: [CatsModule, DatabaseModule, ExceptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements  NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, IpMiddlerware)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      // )
      // .forRoutes(CatsController)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
