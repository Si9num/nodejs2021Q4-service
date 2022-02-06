import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from '../login/nestLogin.module';
import { NestTaskController } from '../tasks/nestTask.controller';
import { NestTaskService } from '../tasks/nestTask.service';
import { Task } from '../tasks/task.memory.repository';
import { Board } from './board.memory.repository';
import { NestBoardController } from './nestBoard.controller';
import { NestBoardService } from './nestBoard.service';

@Module({
  controllers: [NestBoardController],
  providers: [NestBoardService],
  imports: [TypeOrmModule.forFeature([Board, Task]),forwardRef(() => LoginModule)],
  exports: [TypeOrmModule],
})
export class BoardsModule {}
