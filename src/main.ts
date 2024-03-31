import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationFilter } from './modules/chore/filters';

const PORT = 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: ValidationFilter,
    transformOptions: {
      enableImplicitConversion: true
    },
  }));

  const config = new DocumentBuilder()
  .setTitle('Adasi Students')
  .setDescription('Documentação da API feita para o desafio da adasi')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT)
}
bootstrap();
