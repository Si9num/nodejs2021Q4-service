import { configOpt } from './common/config';

import tt from '../volume-db/connect';
import { NestFactory } from '@nestjs/core';
import { NestModules } from './nest.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { logPar } from './logger';

async function server() {
  const app = await NestFactory.create(
    NestModules,
    new FastifyAdapter({ logger: logPar })
  );

  app.listen(`${configOpt.PORT}`, '0.0.0.0', () => {
    //tt();
    console.log(`App is running on http://localhost:${configOpt.PORT}`);
  });
}
server();
