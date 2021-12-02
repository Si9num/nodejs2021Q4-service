const { v4: uuidv4 } = require('uuid');

const { arrRes } = require('./user.memory.repository');

async function getUser(req, res) {
  res.send(arrRes);
}
async function getIdUser(req, res) {
  const result = arrRes.find((record) => record.id === req.params.id);

  res.send(result);
}
async function postUser(req, res) {
  // const users = await usersService.getAll();
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrRes.push(name);

  res.code(201).send(name);
}
async function putUser(req, res) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrRes.find((record) => record.id === req.params.id);
  arrRes.splice(arrRes.indexOf(result), 1, updated);

  res.send(updated);
}
async function delUser(req, res) {
  const result = arrRes.find((record) => record.id === req.params.id);
  arrRes.splice(arrRes.indexOf(result), 1);

  res.send('record was deleted');
}

module.exports = { getUser, postUser, getIdUser, putUser, delUser };
