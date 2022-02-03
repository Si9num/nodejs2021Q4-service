import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { customPar } from '../../logger';

import { getRepository, Repository } from 'typeorm';
import { FastifyReply } from 'fastify';
import { Task } from './task.memory.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Taskdto } from './nestTask.dto';

@Injectable()
export class NestTaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ) {}
  async getTask() {
    const task = await this.tasksRepository.find();

    return task;
  }

  async getIdTask(id: string) {
    const task = await this.tasksRepository.findOne(id);
    if (JSON.stringify(task) === undefined) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'not exist',
        },

        HttpStatus.NOT_FOUND
      );
    }
    return task;
  }

  async postTask(id: string, dto: Taskdto) {
    const task = await this.tasksRepository.create(dto);
    task.boardId = id;
    await task.save();
    return task;
  }

  async putTask(id: string, dto: Taskdto) {
    await this.tasksRepository.update(id, dto);
    return await this.tasksRepository.findOne(id);
  }

  async delTask(id: string) {
    return await this.tasksRepository.delete(id);
  }
}
