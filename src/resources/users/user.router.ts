import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';

import { arrRes } from './user.memory.repository';

interface request extends FastifyRequest {
  body: {
    id: string;
    name: string;
    login: string;
    password: string;
  };
  id: string;
  params: { id: string };
}
function getUser(req: FastifyRequest, res: FastifyReply) {
  res.send(arrRes);
}
function getIdUser(req: request, res: FastifyReply): void {
  const result = arrRes.find((record) => record.id === req.params.id);

  res.send(result);
}
function postUser(req: request, res: FastifyReply) {
  const name = req.body;

  Object.defineProperty(name, 'id', {
    value: `${uuidv4()}`,
    writable: false,
    enumerable: true,
  });

  arrRes.push(name);

  res.code(201).send(name);
}
function putUser(req: request, res: FastifyReply) {
  const updated = req.body;
  Object.defineProperty(updated, 'id', {
    value: `${req.params.id}`,
    writable: false,
    enumerable: true,
  });
  const result = arrRes.find((record) => record.id === req.params.id);
  if (result !== undefined) {
    arrRes.splice(arrRes.indexOf(result), 1, updated);
  }
  res.send(updated);
}
function delUser(req: request, res: FastifyReply) {
  const result = arrRes.find((record) => record.id === req.params.id);
  if (result !== undefined) {
    arrRes.splice(arrRes.indexOf(result), 1);
  }

  res.send('record was deleted');
}

export { getUser, postUser, getIdUser, putUser, delUser };
