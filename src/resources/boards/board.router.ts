import { v4 as uuidv4 } from 'uuid';

import { FastifyReply, FastifyRequest } from 'fastify';
import { arrResBoard } from './board.memory.repository';
import { arrResTask } from '../tasks/task.memory.repository';
import { customPar } from '../../logger';

interface request extends FastifyRequest {
  body: { id: string; title: string; column: object };
  id: string;
  params: { id: string };
}

/**
 This function get a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function getBoard(req: FastifyRequest, res: FastifyReply): void {
  res.send(arrResBoard);
  customPar(req, res);
}

/**
 This function get a boards.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function getIdBoard(req: request, res: FastifyReply): void {
  const result = arrResBoard.find((record) => record.id === req.params.id);
  if (!result) {
    res.code(404).send('not found');
  }
  res.send(result);
  customPar(req, res);
}

/**
 This function post a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function postBoard(req: request, res: FastifyReply): void {
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrResBoard.push(name);

  res.code(201).send(name);
  customPar(req, res);
}

/**
 This function update a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function putBoard(req: request, res: FastifyReply): void {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrResBoard.find((record) => record.id === req.params.id);
  if (result !== undefined) {
    arrResBoard.splice(arrResBoard.indexOf(result), 1, updated);
  }

  res.send(updated);
  customPar(req, res);
}

/**
 This function delete a board.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
function delBoard(req: request, res: FastifyReply): void {
  const result = arrResBoard.find((record) => record.id === req.params.id);

  const arrResTaskk = arrResTask.filter(
    (record) => record.boardId !== req.params.id
  );

  arrResTask.splice(0, arrResTask.length);
  for (let i = 0; i < arrResTaskk.length; i += 1) {
    arrResTask.push(arrResTaskk[i]);
  }
  if (result !== undefined) {
    arrResBoard.splice(arrResBoard.indexOf(result), 1);
  }
  res.send('record was deleted');
  customPar(req, res);
}

export { getBoard, postBoard, getIdBoard, putBoard, delBoard };
