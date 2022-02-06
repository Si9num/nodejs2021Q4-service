import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';
import { Board } from './resources/boards/board.memory.repository';
import { NestBoardController } from './resources/boards/nestBoard.controller';
import { BoardsModule } from './resources/boards/nestBoard.module';
import { NestBoardService } from './resources/boards/nestBoard.service';
import { NestLoginController } from './resources/login/nestLogin.controller';
import { LoginModule } from './resources/login/nestLogin.module';
import { NestLoginService } from './resources/login/nestLogin.service';
import { NestTaskController } from './resources/tasks/nestTask.controller';
import { TasksModule } from './resources/tasks/nestTask.module';
import { NestTaskService } from './resources/tasks/nestTask.service';
import { Task } from './resources/tasks/task.memory.repository';
import { NestUserController } from './resources/users/nestUser.controller';
import { UsersModule } from './resources/users/nestUser.module';
import { NestUserService } from './resources/users/nestUser.service';
import { User } from './resources/users/user.memory.repository';

@Module({
  providers: [NestUserService, NestBoardService, NestTaskService],
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    UsersModule,
    TasksModule,
    BoardsModule,
    LoginModule,
  ],
})
export class NestModules {}
