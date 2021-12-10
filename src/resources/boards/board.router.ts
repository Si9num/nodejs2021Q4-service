import { v4 as uuidv4 } from 'uuid';

import { arrResBoard } from './board.memory.repository';
import { arrResTask } from '../tasks/task.memory.repository';

function getBoard(req, res) {
  res.send(arrResBoard);
}
function getIdBoard(req, res) {
  const result = arrResBoard.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}
function postBoard(req, res) {
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrResBoard.push(name);

  res.code(201).send(name);
}
function putBoard(req, res) {
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
function delBoard(req, res) {
  const result = arrResBoard.find((record) => record.id === req.params.id);

  const arrResTaskk = arrResTask.filter(
    (record) => record.boardId !== req.params.id
  );

  arrResTask.splice(0, arrResTask.length);
  for (let i = 0; i < arrResTaskk.length; i += 1) {
    arrResTask.push(arrResTaskk[i]);
  }
  arrResBoard.splice(arrResBoard.indexOf(result), 1);
  res.send('record was deleted');
}

export { getBoard, postBoard, getIdBoard, putBoard, delBoard };
