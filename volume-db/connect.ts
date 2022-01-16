import { createConnection } from 'typeorm';
import { User } from '../src/resources/users/user.memory.repository';
import { Board } from '../src/resources/boards/board.memory.repository';
import { Task } from '../src/resources/tasks/task.memory.repository';

async function tt() {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [User, Board, Task],
    synchronize: true,
    migrations: ['./src/migrations/**/*.ts'],
  });
}

export default tt;
