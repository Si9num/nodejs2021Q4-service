import { FastifyReply, FastifyRequest } from 'fastify';
import fs from 'fs';

export default function leveling() {
  return process.env.LOGGER_VAR === '0'
    ? 'error'
    : process.env.LOGGER_VAR === '1'
    ? 'warn'
    : process.env.LOGGER_VAR === '2'
    ? 'info'
    : process.env.LOGGER_VAR === '3'
    ? 'debug'
    : process.env.LOGGER_VAR === '4'
    ? 'trace'
    : 'info';
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
