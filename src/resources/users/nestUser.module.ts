import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestUserController } from './nestUser.controller';
import { NestUserService } from './nestUser.service';
import { User } from './user.memory.repository';

@Module({
  controllers: [NestUserController],
  providers: [NestUserService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
})
export class UsersModule {}
