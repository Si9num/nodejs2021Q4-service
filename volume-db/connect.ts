import { createConnection } from 'typeorm';
import { User } from './user';
import { Board } from './board';
import { Task } from './tasks';

async function tt() {
  const connect = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [User, Board, Task],
    synchronize: true,
  });
}
export { tt };
