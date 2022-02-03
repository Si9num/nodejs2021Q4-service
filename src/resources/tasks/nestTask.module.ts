import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestTaskController } from './nestTask.controller';
import { NestTaskService } from './nestTask.service';
import { Task } from './task.memory.repository';

@Module({
  controllers: [NestTaskController],
  providers: [NestTaskService],
  imports: [TypeOrmModule.forFeature([Task])],
  exports: [TypeOrmModule],
})
export class TasksModule {}
