import { User } from '../users/user.memory.repository';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { FastifyReply, FastifyRequest } from 'fastify';

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
async function createToken(req: request, res: FastifyReply) {
  const { login, password } = req.body;
  const user = await getRepository(User).findOne({ login, password });
  let token;
  if (user) {
    const { id, password } = user;
    token = jwt.sign({ id, password }, `${process.env.JWT_SECRET_KEY}`);
  }
  if (token) {
    res
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ token: token });
  } else {
    res.status(403).send('dont exist');
  }
}
export { createToken };
