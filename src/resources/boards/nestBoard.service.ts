import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { customPar } from '../../logger';
import { getRepository, ObjectID, Repository } from 'typeorm';
import { Board } from './board.memory.repository';
import { Task } from '../tasks/task.memory.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Boarddto } from './nestBoard.dto';

@Injectable()
export class NestBoardService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ) {}
  async getBoard() {
    const board = await this.boardsRepository.find();
    return board;
  }

  async getIdBoard(id: string) {
    const board = await this.boardsRepository.findOne(id);
    if (JSON.stringify(board) === undefined) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'not exist',
        },
        HttpStatus.NOT_FOUND
      );
    }

    return board;
  }

  async postBoard(dto: Boarddto) {
    const board = await this.boardsRepository.create(dto);
    await board.save();
    return board;
  }

  async putBoard(id: string, dto: Boarddto) {
    const board = await this.boardsRepository.findOne(id);
    if (board !== undefined) {
      return await this.boardsRepository.update(id, dto);
    }
  }

  async delBoard(id: string) {
    await this.tasksRepository.delete({ boardId: id });

    return await this.boardsRepository.delete(id);
  }
}
