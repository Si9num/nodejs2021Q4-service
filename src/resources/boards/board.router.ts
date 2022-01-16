import { v4 as uuidv4 } from 'uuid';
import { FastifyReply, FastifyRequest } from 'fastify';
import { getRepository } from 'typeorm';
import { customPar } from '../../logger';
import { Board } from './board.memory.repository';
import { Task } from '../tasks/task.memory.repository';

interface request extends FastifyRequest {
  body: { id: string; title: string; columns: string[] };
  id: string;
  params: { id: string };
}

/**
 This function get a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function getBoard(req: FastifyRequest, res: FastifyReply): Promise<void> {
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
async function getIdBoard(req: request, res: FastifyReply): Promise<void> {
  const board = await Board.findOne(req.params.id);
  if (!board) {
    res.code(404).send('not found');
  }
  res.send(board);
  customPar(req, res);
}

/**
 This function post a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function postBoard(req: request, res: FastifyReply): Promise<void> {
  /* const { title, column } = req.body;
  const board = Board.create({
    title: title,
    column: column,
  }); */
  const board = await getRepository(Board).create(req.body);
  const ress = await getRepository(Board).save(board);

  res.code(201).send(ress);
  customPar(req, res);
}

/**
 This function update a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function putBoard(req: request, res: FastifyReply): Promise<void> {
  const board = await getRepository(Board).findOne(req.params.id);
  if (board !== undefined) {
    getRepository(Board).merge(board, req.body);
    const ress = await getRepository(Board).save(board);
    res.send(ress);
  }
  customPar(req, res);
}

/**
 This function delete a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function delBoard(req: request, res: FastifyReply): Promise<void> {
  await Board.delete(req.params.id);

  res.send('record was deleted');
  customPar(req, res);
}

export { getBoard, postBoard, getIdBoard, putBoard, delBoard };
