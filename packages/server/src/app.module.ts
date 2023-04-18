import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { rootConfiguration } from './config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [rootConfiguration],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/client-dist'),
      exclude: ['/api*'],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
