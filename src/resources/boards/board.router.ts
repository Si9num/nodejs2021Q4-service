import { v4 as uuidv4 } from 'uuid';

import { FastifyReply, FastifyRequest } from 'fastify';
import { arrResBoard } from './board.memory.repository';
import { arrResTask } from '../tasks/task.memory.repository';

interface request extends FastifyRequest {
  body: { id: string; title: string; column: object };
  id: string;
  params: { id: string };
}

function getBoard(req: FastifyRequest, res: FastifyReply) {
  res.send(arrResBoard);
}
function getIdBoard(req: request, res: FastifyReply) {
  const result = arrResBoard.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}
function postBoard(req: request, res: FastifyReply) {
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrResBoard.push(name);

  res.code(201).send(name);
}
function putBoard(req: request, res: FastifyReply) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result: any = arrResBoard.find((record) => record.id === req.params.id);
  arrResBoard.splice(arrResBoard.indexOf(result), 1, updated);

  res.send(updated);
}
function delBoard(req: request, res: FastifyReply) {
  const result: any = arrResBoard.find((record) => record.id === req.params.id);

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
