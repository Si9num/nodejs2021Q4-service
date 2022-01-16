import { Board } from './src/resources/boards/board.memory.repository';
import { Task } from './src/resources/tasks/task.memory.repository';
import { User } from './src/resources/users/user.memory.repository';

const config = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Board, Task],
  synchronize: false,
  migrations: ['./src/migrations/**/*.ts'],
  migrationsRun: true,
  cli: {
    migrationsDir: './src/migrations',
  },
};
export default config;
