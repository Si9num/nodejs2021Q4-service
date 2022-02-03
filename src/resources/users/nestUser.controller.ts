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
  async getUser() {
    return await this.service.getUser();
  }
  @Get(':id')
  async getIdUser(@Param('id') id: string) {
    return await this.service.getIdUser(id);
  }
  @Post()
  async postUser(@Body() dto: Userdto) {
    return await this.service.postUser(dto);
  }

  @Put(':id')
  async putUser(@Param('id') id: string, @Body() dto: Userdto) {
    return await this.service.putUser(id, dto);
  }
  @Delete(':id')
  async delUser(@Param('id') id: string) {
    return await this.service.delUser(id);
  }
}
