import { FastifyReply, FastifyRequest } from 'fastify';
import fs from 'fs';

export default function leveling(): string {
  const params = ['error', 'warn', 'info', 'debug', 'trace'];
  let res = '';
  if (process.env.LOGGER_VAR !== undefined) {
    res = params[+process.env.LOGGER_VAR];
  }
  return res;
}
export function customPar(req: FastifyRequest, res: FastifyReply): void {
  const log = req.log.info(
    {
      body: req.body,
      url: req.url,
      statusCode: res.statusCode,
      queryPar: req.query,
    },
    'Log Info'
  );
  return log;
}
export const logPar = {
  stream: fs.createWriteStream('./log.txt', { flags: 'a' }),
  level: `${leveling()}`,
};
