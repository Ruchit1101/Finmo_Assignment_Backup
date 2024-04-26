import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.MY_PORT || 8001;
  await AppModule.setupSwagger(app);
  await app.listen(port);
}
bootstrap();
