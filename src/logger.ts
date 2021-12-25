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
    ? 'info'
    : 'info';
}
