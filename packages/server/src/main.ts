import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rootConfiguration, RootConfiguration } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // <- Placing our api under the /api endpoint

  const { port, host, enableCors, protocol } = app.get<RootConfiguration>(
    rootConfiguration.KEY,
  );

  if (enableCors) {
    app.enableCors();
  }

  await app.listen(port, host);

  Logger.log(
    `🚀 Server running on ${protocol}://${host}:${port}`,
    'NestApplication',
  );
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
