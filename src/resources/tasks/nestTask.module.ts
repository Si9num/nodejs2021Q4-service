import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from '../login/nestLogin.module';
import { NestTaskController } from './nestTask.controller';
import { NestTaskService } from './nestTask.service';
import { Task } from './task.memory.repository';

@Module({
  controllers: [NestTaskController],
  providers: [NestTaskService],
  imports: [TypeOrmModule.forFeature([Task]), forwardRef(() => LoginModule)],
  exports: [TypeOrmModule],
})
export class TasksModule {}
