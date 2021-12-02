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

const app = fastify;
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

// app.use(express.json());

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
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

module.exports = app;
