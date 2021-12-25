import swaggerUI from 'fastify-swagger';
import path from 'path';
import YAML from 'yamljs';

import fastify, { FastifyReply } from 'fastify';
import { logPar } from './logger';

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

const app = fastify({ logger: logPar });

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.register(swaggerUI, swaggerDocument);

app.get('/', (req, res: FastifyReply) => {
  res.send('Service is running!');
});

app.get('/users', UserGet);
app.get('/users/:id', UserGetId);
app.post('/users', UserPost);
app.put('/users/:id', UserPut);
app.delete('/users/:id', UserDel);

app.get('/boards', BoardGet);
app.get('/boards/:id', BoardGetId);
app.post('/boards', BoardPost);
app.put('/boards/:id', BoardPut);
app.delete('/boards/:id', BoardDel);

app.get('/boards/:id/tasks', TaskGet);
app.get('/boards/:id/tasks/:id', TaskGetId);
app.post('/boards/:id/tasks', TaskPost);
app.put('/boards/:id/tasks/:id', TaskPut);
app.delete('/boards/:id/tasks/:id', TaskDel);

export { app };
