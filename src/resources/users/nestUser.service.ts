import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { customPar } from '../../logger';
import { User } from './user.memory.repository';
import bcrypt from 'bcrypt';

import { Code, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userdto } from './nestUser.dto';
import { json } from 'stream/consumers';
import { async } from 'rxjs';
import { postUser, putUser, delUser } from './user.router';
import { Task } from '../tasks/task.memory.repository';

@Injectable()
export class NestUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ) {}
  getUser() {
    const user = this.usersRepository.find();

    //customPar(req, res);
    return user;
  }

  async getIdUser(id: string) {
    const user = await this.usersRepository.findOne(id);

    return await user;
  }

  async postUser(dto: Userdto) {
    const encrypt = await bcrypt.hash(dto.password, 10);
    const user = await this.usersRepository.create(dto);
    user.password = encrypt;
    await user.save();
    let res = JSON.stringify(user);
    let ress = res.slice(0, res.indexOf('"password"') - 1);
    return JSON.parse(ress + '}');
  }

  async putUser(id: string, dto: Userdto) {
    await this.usersRepository.update(id, dto);
    return await this.usersRepository.findOne(id);
  }

  async delUser(id: string) {
    await this.tasksRepository.update({ userId: id }, { userId: null });
    return await this.usersRepository.delete(id);
  }
}
