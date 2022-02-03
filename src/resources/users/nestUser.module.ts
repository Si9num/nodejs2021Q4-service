import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../tasks/task.memory.repository';
import { NestUserController } from './nestUser.controller';
import { NestUserService } from './nestUser.service';
import { User } from './user.memory.repository';

@Module({
  controllers: [NestUserController],
  providers: [NestUserService],
  imports: [TypeOrmModule.forFeature([User, Task])],
  exports: [TypeOrmModule, NestUserService],
})
export class UsersModule {}
