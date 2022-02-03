import { configOpt } from './common/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import tt from '../volume-db/connect';
import { NestFactory } from '@nestjs/core';
import { NestModules } from './nest.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { logPar } from './logger';
import YAML from 'yamljs';
import path from 'path';
import swaggerUiExpress from 'swagger-ui-express';

async function server() {
  const app = await NestFactory.create(
    NestModules,
    new FastifyAdapter({ logger: logPar })
  );
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  const doc = SwaggerModule.createDocument(app, swaggerDocument);
  SwaggerModule.setup('/api', app, doc);

  app.listen(`${configOpt.PORT}`, '0.0.0.0', () => {
    //tt();
    console.log(`App is running on http://localhost:${configOpt.PORT}`);
  });
}
server();
