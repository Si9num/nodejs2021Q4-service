import { FastifyReply, FastifyRequest } from 'fastify';
import { getRepository } from 'typeorm';

import { customPar } from '../../logger';

import { Task } from './task.memory.repository';

interface request extends FastifyRequest {
  body: {
    id: string;
    title: string;
    order: number;
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
 * 
 This function post a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function postTask(req: request, res: FastifyReply): Promise<void> {
  const { title, order, description, columnId, boardId, userId } = req.body;
  const task = await Task.create({
    title,
    order,
    description,
    columnId,
    boardId: req.params.id,
    userId,
  });
  await task.save();
  // const task = await getRepository(Task).create(req.body);
  // const ress = await getRepository(Task).save(task);
  res.code(201).send(task);
  customPar(req, res);
}

/**
 This function update a task.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function putTask(req: request, res: FastifyReply): Promise<void> {
  const task = await getRepository(Task).findOne(req.params.id);
  if (task !== undefined) {
    getRepository(Task).merge(task, req.body);
    const ress = await getRepository(Task).save(task);
    res.send(ress);
  }
  customPar(req, res);
}

/**
 * 
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
