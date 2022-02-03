import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Userdto } from '../users/nestUser.dto';
import { NestLoginService } from './nestLogin.service';

@Controller('/login')
export class NestLoginController {
  constructor(private service: NestLoginService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  async login(@Body() dto: Userdto) {
    
    return await this.service.createToken(dto);
  }
}
