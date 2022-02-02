import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { customPar } from '../../logger';
import { User } from './user.memory.repository';
import bcrypt from 'bcrypt';
import { FastifyReply } from 'fastify';
import { getRepository } from 'typeorm';
import { NestUserService } from './nestUser.service';
import { Userdto } from './nestUser.dto';

@Controller('/users')
export class NestUserController {
  constructor(private service: NestUserService) {}
  @Get()
  getUser() {
    return this.service.getUser();
  }
  @Get(':id')
  getIdUser(@Param('id') id: string) {
    return this.service.getIdUser(id);
  }
  @Post()
  async postUser(@Body() dto: Userdto) {
    return this.service.postUser(dto);
  }

  @Put(':id')
  async putUser(@Param('id') id: string, @Body() dto: Userdto) {
    return this.service.putUser(id, dto);
  }
  @Delete(':id')
  delUser(@Param('id') id: string) {
    return this.service.delUser(id);
  }
}
