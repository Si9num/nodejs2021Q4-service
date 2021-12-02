const { v4: uuidv4 } = require('uuid');

const arrResTask = require('./task.memory.repository');

async function getTask(req, res) {
  res.send(arrResTask);
}
async function getIdTask(req, res) {
  const result = arrResTask.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}
async function postTask(req, res) {
  // const users = await usersService.getAll();
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });
  Object.defineProperty(name, 'boardId', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });

  arrResTask.push(name);
  console.log(name);
  res.code(201).send(name);
}
async function putTask(req, res) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrResTask.find((record) => record.id === req.params.id);
  arrResTask.splice(arrResTask.indexOf(result), 1, updated);

  res.send(updated);
}
async function delTask(req, res) {
  const result = arrResTask.find((record) => record.id === req.params.id);
  arrResTask.splice(arrResTask.indexOf(result), 1);

  res.send('record was deleted');
}

module.exports = { getTask, postTask, getIdTask, putTask, delTask };
