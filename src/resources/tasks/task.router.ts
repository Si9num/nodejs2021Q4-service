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

/**
 This function get a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function getTask(req: request, res: FastifyReply):void {
  res.send(arrResTask);
}

/**
 This function get a tasks.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function getIdTask(req: request, res: FastifyReply):void {
  const result = arrResTask.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
}

/**
 This function post a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function postTask(req: request, res: FastifyReply):void {
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

/**
 This function update a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function putTask(req: request, res: FastifyReply):void {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrResTask.find((record) => record.id === req.params.id);
  if (result !== undefined) {
    arrResTask.splice(arrResTask.indexOf(result), 1, updated);
  }

  res.send(updated);
}

/**
 This function delete a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function delTask(req: request, res: FastifyReply):void {
  const result = arrResTask.find((record) => record.id === req.params.id);
  if (result !== undefined) {
    arrResTask.splice(arrResTask.indexOf(result), 1);
  }
  res.send('record was deleted');
}

export { getTask, postTask, getIdTask, putTask, delTask };
