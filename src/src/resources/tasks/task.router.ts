import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';
import { arrResTask } from './task.memory.repository';

interface request extends FastifyRequest {
  body: {
    id: string;
    title: string;
    order: string;
    description: string;
    userId: null;
    boardId: string;
    columnId: null;
  };
  id: string;
  params: { id: string };
}
function getTask(req: request, res: FastifyReply) {
  res.send(arrResTask);
}
function getIdTask(req: request, res: FastifyReply) {
  const result = arrResTask.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}
function postTask(req: request, res: FastifyReply) {
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

  res.code(201).send(name);
}
function putTask(req: request, res: FastifyReply) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result: any = arrResTask.find((record) => record.id === req.params.id);
  arrResTask.splice(arrResTask.indexOf(result), 1, updated);

  res.send(updated);
}
function delTask(req: request, res: FastifyReply) {
  const result: any = arrResTask.find((record) => record.id === req.params.id);
  arrResTask.splice(arrResTask.indexOf(result), 1);
  res.send('record was deleted');
}

export { getTask, postTask, getIdTask, putTask, delTask };
