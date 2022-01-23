import jwt from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';

type done = () => void;
function verif(req: FastifyRequest, res: FastifyReply, done: done) {
  const header = req.headers.authorization;
  if (header !== undefined) {
    const tokenCheck = req.headers.authorization;
    if (tokenCheck !== undefined) {
      const [type, token] = tokenCheck.split(' ');
      if (type !== 'Bearer') {
        res.status(401).send('wrong schema');
      } else {
        try {
          const check = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);

          return done();
        } catch (error) {
          res.status(401).send('unauthorized');
        }
      }
    }
  }
  res.status(401).send('unauthorized');
}
export default verif;
