import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);

  const config = new DocumentBuilder()
    .setTitle('Web Services & REST API ')
    .setDescription('API REST pour gérer les tâches')
    .setVersion('1')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(process.env.PORT as unknown as number);
}
bootstrap();
