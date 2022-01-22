import jwt from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';
function verif(req: FastifyRequest, res: FastifyReply, done: any) {
  const header = req.headers['Authorization'];
  if (header !== undefined) {
    const tokenCheck = req.headers['Authorization'];
    if (tokenCheck !== undefined) {
      const [type, token] = tokenCheck[0].split(' ');
      if (type !== 'Bearer') {
        res.status(401).send('wrong schema');
      } else {
        const check = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);
        console.log(check);
        return done();
      }
    }
  }
  res.status(401).send('unauthorized');
}
export default verif;
