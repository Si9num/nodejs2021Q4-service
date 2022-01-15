import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';
import { customPar } from '../../logger';
import { arrResTask } from './task.memory.repository';
import { Task } from '../../../volume-db/tasks';

interface request extends FastifyRequest {
  body: {
    id: string;
    title: string;
    order: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
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
async function getTask(req: request, res: FastifyReply): Promise<void> {
  const task = await Task.find();
  res.send(task);
  customPar(req, res);
}

/**
 This function get a tasks.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function getIdTask(req: request, res: FastifyReply): Promise<void> {
  const task = await Task.findOne(req.params.id);
  if (!task) {
    res.code(404).send('not found');
  }
  res.send(task);
  customPar(req, res);
}

/**
 This function post a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function postTask(req: request, res: FastifyReply): Promise<void> {
  const name = req.body;
  const task = Task.create(name);
  await task.save();
  res.code(201).send(name);
  customPar(req, res);
}

/**
 This function update a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function putTask(req: request, res: FastifyReply): Promise<void> {
  const updated = req.body;
  const task = await Task.findOne(req.params.id);
  if (task != undefined) {
    Task.merge(task, req.body);
  }
  task?.save();

  res.send(updated);
  customPar(req, res);
}

/**
 This function delete a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function delTask(req: request, res: FastifyReply): Promise<void> {
  await Task.delete(req.params.id);
  res.send('record was deleted');
  customPar(req, res);
}

export { getTask, postTask, getIdTask, putTask, delTask };
