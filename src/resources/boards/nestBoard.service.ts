import { Injectable } from '@nestjs/common';
import { customPar } from '../../logger';
import { getRepository } from 'typeorm';
import { Board } from './board.memory.repository';
import { Task } from '../tasks/task.memory.repository';

@Injectable()
export class NestBoardService {
  async  getBoard(req:any, res:any): Promise<void> {
    const board = await Board.find();
    res.send(board);
    customPar(req, res);
  }
  
  /**
   This function get a boards.
       *
       * @param  req - The request object
       * @param  res - The response object
   */
  async  getIdBoard(req:any, res:any): Promise<void> {
    const board = await Board.findOne(req.params.id);
    if (!board) {
      res.code(404).send('not found');
    }
    res.send(board);
    customPar(req, res);
  }
  
 
  async  postBoard(req:any, res:any): Promise<void> {
   
    const board = await getRepository(Board).create(req.body);
    const ress = await getRepository(Board).save(board);
  
    res.code(201).send(ress);
    customPar(req, res);
  }
  
 
  async  putBoard(req:any, res:any): Promise<void> {
    const board = await getRepository(Board).findOne(req.params.id);
    if (board !== undefined) {
      getRepository(Board).merge(board, req.body);
      const ress = await getRepository(Board).save(board);
      res.send(ress);
    }
    customPar(req, res);
  }
  

  async  delBoard(req:any, res:any): Promise<void> {
    await Board.delete(req.params.id);
    const id = req.params.id;
    await getRepository(Task)
      .createQueryBuilder()
      .delete()
      .from(Task)
      .where('boardId = :id', { id: id })
      .execute();
    res.send('record was deleted');
    customPar(req, res);
  }
}


