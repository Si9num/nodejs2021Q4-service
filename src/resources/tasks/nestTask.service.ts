import { Injectable } from '@nestjs/common';
import { customPar } from '../../logger';

import { getRepository } from 'typeorm';
import { FastifyReply } from 'fastify';
import { Task } from './task.memory.repository';

@Injectable()
export class NestTaskService {
  async getTask(req: any, res: any) {
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
  async getIdTask(req: any, res: any) {
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
  async postTask(req: any, res: any): Promise<void> {
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
    res.code(201).send(task);
    customPar(req, res);
  }

  async putTask(req: any, res: any) {
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
  async delTask(req: any, res: any): Promise<void> {
    await Task.delete(req.params.id);
    res.send('record was deleted');
    customPar(req, res);
  }
}
