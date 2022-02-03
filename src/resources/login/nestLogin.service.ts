import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Userdto } from '../users/nestUser.dto';
import { User } from '../users/user.memory.repository';
import { login } from './login.model';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { createToken } from 'typescript';

@Injectable()
export class NestLoginService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}
  async createToken(dto: Userdto) {
    const user = await this.usersRepository.findOne({
      where: {
        login: dto.login,
        password: dto.password,
      },
    });
    let token;
    if (user) {
      const password = user.password;
      const userId = user.id;
      token = this.jwtService.sign({ userId, password });
    }
    if (token) {
      return { token };
    } else {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'dont exist',
        },
        HttpStatus.FORBIDDEN
      );
    }
  }
}
