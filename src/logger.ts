import { FastifyReply, FastifyRequest } from 'fastify';
import fs from 'fs';

export default function leveling() {
  const params = ['error', 'warn', 'info', 'debug', 'trace'];
  let res;
  if (process.env.LOGGER_VAR !== undefined) {
    res = params[+process.env.LOGGER_VAR];
  }
  return res;
}
export function customPar(req: FastifyRequest, res: FastifyReply) {
  const log = req.log.info(
    { body: req.body, url: req.url, statusCode: res.statusCode },
    'Log Info'
  );
  return log;
}
export const logPar = {
  stream: fs.createWriteStream('./log.txt'),
  level: `${leveling()}`,
};
