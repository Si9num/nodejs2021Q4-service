const { v4: uuidv4 } = require('uuid');

const arrResBoard = require('./board.memory.repository');

async function getBoard(req, res) {
  res.send(arrResBoard);
}
async function getIdBoard(req, res) {
  const result = arrResBoard.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}
async function postBoard(req, res) {
  // const users = await usersService.getAll();
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrResBoard.push(name);

  res.code(201).send(name);
}
async function putBoard(req, res) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrResBoard.find((record) => record.id === req.params.id);
  arrResBoard.splice(arrResBoard.indexOf(result), 1, updated);

  res.send(updated);
}
async function delBoard(req, res) {
  const result = arrResBoard.find((record) => record.id === req.params.id);
  arrResBoard.splice(arrResBoard.indexOf(result), 1);

  res.send('record was deleted');
}

module.exports = { getBoard, postBoard, getIdBoard, putBoard, delBoard };
