import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';
import { customPar } from '../../logger';
import { arrRes } from './user.memory.repository';
import { User } from '../../../volume-db/user';
import { createQueryBuilder, QueryBuilder } from 'typeorm';

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
/**
 This function get a user.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function getUser(req: FastifyRequest, res: FastifyReply): Promise<void> {
  //res.send(arrRes);
  const user = await User.find();
  res.send(user);
  customPar(req, res);
}

/**
 This function get a users.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function getIdUser(req: request, res: FastifyReply): Promise<void> {
  const user = await User.findOne(req.params.id);
  if (!user) {
    res.code(404).send('not found');
  }
  customPar(req, res);
  res.send(user);
}

/**
 This function post a user.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function postUser(req: request, res: FastifyReply): Promise<void> {
  const name = req.body;
  const user = User.create(name);
  await user.save();
  res.code(201).send(name);
  customPar(req, res);
}

/**
 This function update a user.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function putUser(req: request, res: FastifyReply): Promise<void> {
  const user = await User.findOne(req.params.id);
  if (user != undefined) {
    User.merge(user, req.body);
  }
  user?.save();
  res.send(user);
  customPar(req, res);
}

/**
 This function delete a user.
     *
     * @param  req - The request object
     * @param  res - The response object
 */
async function delUser(req: request, res: FastifyReply): Promise<void> {
  await User.delete(req.params.id);
  res.send('record was deleted');
  customPar(req, res);
}

export { getUser, postUser, getIdUser, putUser, delUser };
