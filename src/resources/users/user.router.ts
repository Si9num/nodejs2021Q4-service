import { v4 as uuidv4 } from 'uuid';

import { arrRes } from './user.memory.repository';

function getUser(req, res) {
  res.send(arrRes);
}
function getIdUser(req, res) {
  const result = arrRes.find((record) => record.id === req.params.id);

  res.send(result);
}
function postUser(req, res) {
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrRes.push(name);

  res.code(201).send(name);
}
function putUser(req, res) {
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
function delUser(req, res) {
  const result = arrRes.find((record) => record.id === req.params.id);
  arrRes.splice(arrRes.indexOf(result), 1);

  res.send('record was deleted');
}

export { getUser, postUser, getIdUser, putUser, delUser };
