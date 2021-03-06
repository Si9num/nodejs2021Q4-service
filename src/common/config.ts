import path from 'path';

import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});
const configOpt = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
};
export { configOpt };







