import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // Importación correcta


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const config = new DocumentBuilder()
  .setTitle("Core server api documentation")
  .setDescription("This is the test of swagger apiiii")
  .setVersion("1.0")
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
