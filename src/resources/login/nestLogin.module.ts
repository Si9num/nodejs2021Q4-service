import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestUserService } from '../users/nestUser.service';
import { User } from '../users/user.memory.repository';
import { NestLoginController } from './nestLogin.controller';
import { NestLoginService } from './nestLogin.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/nestUser.module';
import { BoardsModule } from '../boards/nestBoard.module';
import { TasksModule } from '../tasks/nestTask.module';

@Module({
  controllers: [NestLoginController],
  providers: [NestLoginService],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    forwardRef(() => UsersModule),
    forwardRef(() => TasksModule),
    forwardRef(() => BoardsModule),
  ],
  exports: [TypeOrmModule, JwtModule, NestLoginService],
})
export class LoginModule {}
