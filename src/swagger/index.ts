import type { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app: NestExpressApplication) => {
  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Toimc Nestjs Admin Swagger')
    .setDescription('Nestjs backend API')
    .setVersion('1.0')
    .addTag('beta')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  // swagger url http://localhost:3000/docs
  SwaggerModule.setup('docs', app, document);
};
