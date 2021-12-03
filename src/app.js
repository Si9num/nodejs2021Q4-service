const fastify = require('fastify')({ logger: true });
const swaggerUI = require('fastify-swagger');
const path = require('path');
const YAML = require('yamljs');

const {
  UserGet,
  UserPost,
  UserGetId,
  UserPut,
  UserDel,
} = require('./resources/users/user.model');
const {
  BoardGet,
  BoardPost,
  BoardGetId,
  BoardPut,
  BoardDel,
} = require('./resources/boards/board.model');
const {
  TaskGet,
  TaskPost,
  TaskGetId,
  TaskPut,
  TaskDel,
} = require('./resources/tasks/task.model');

const app = fastify;
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.register(swaggerUI, swaggerDocument);

app.get('/', (req, res) => {
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

module.exports = app;
