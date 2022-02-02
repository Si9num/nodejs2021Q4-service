import { Injectable } from '@nestjs/common';
import { customPar } from '../../logger';
import { User } from './user.memory.repository';
import bcrypt from 'bcrypt';

import { Code, getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userdto } from './nestUser.dto';
import { json } from 'stream/consumers';

@Injectable()
export class NestUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  getUser() {
    const user = this.usersRepository.find();

    //customPar(req, res);
    return user;
  }

  getIdUser(id: string) {
    const user = this.usersRepository.findOne(id);
    if (!user) {
      return 'not found';
    }
    return user;
  }

  async postUser(dto: Userdto) {
    const encrypt = await bcrypt.hash(dto.password, 10);
    const user = this.usersRepository.create();
    user.password = encrypt;
    user.save();
    let res = JSON.stringify(user);
    let ress = res.slice(0, res.indexOf('"password"') - 1);
    return JSON.parse(ress + '}');
  }

  async putUser(id: string, dto: Userdto) {
    const user = this.usersRepository.findOne(id);
    if (user !== undefined) {
      return this.usersRepository.update(id, dto);
    }
  }

  delUser(id: string) {
    return this.usersRepository.delete(id);
  }
}
