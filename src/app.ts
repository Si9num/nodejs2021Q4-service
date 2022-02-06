import swaggerUI from 'fastify-swagger';
import path from 'path';
import YAML from 'yamljs';

import fastify, { FastifyReply } from 'fastify';
import { logPar } from './logger';
import { login } from './resources/login/login.model';
import {
  UserGet,
  UserPost,
  UserGetId,
  UserPut,
  UserDel,
} from './resources/users/user.model';
import {
  BoardGet,
  BoardPost,
  BoardGetId,
  BoardPut,
  BoardDel,
} from './resources/boards/board.model';
import {
  TaskGet,
  TaskPost,
  TaskGetId,
  TaskPut,
  TaskDel,
} from './resources/tasks/task.model';
import verif from './resources/login/middle';
/*
const app = fastify({ logger: logPar });

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.register(swaggerUI, swaggerDocument);

app.addHook('preHandler', (req, res, done) => {
  if (req.url !== '/' && req.url !== '/doc' && req.url !== '/login') {
    verif(req, res, done);
  }
  done();
});



export { app };
*/
