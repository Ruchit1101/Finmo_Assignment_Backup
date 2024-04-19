import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const port = process.env.MY_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
 
}

bootstrap();
