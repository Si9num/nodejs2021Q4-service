import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Auth } from '../login/auth';
import { Taskdto } from './nestTask.dto';

import { NestTaskService } from './nestTask.service';

@Controller('/boards')
export class NestTaskController {
  constructor(private service: NestTaskService) {}
  @UseGuards(Auth)
  @Get(':boardId/tasks')
  async getTask() {
    return await this.service.getTask();
  }
  @UseGuards(Auth)
  @Get(':boardId/tasks/:id')
  async getIdTask(@Param('id') id: string) {
    return await this.service.getIdTask(id);
  }
  @UseGuards(Auth)
  @Post(':boardId/tasks')
  async postTask(@Param('boardId') id: string, @Body() dto: Taskdto) {
    return await this.service.postTask(id, dto);
  }
  @UseGuards(Auth)
  @Put(':boardId/tasks/:id')
  async putTask(@Param('id') id: string, @Body() dto: Taskdto) {
    return await this.service.putTask(id, dto);
  }
  @UseGuards(Auth)
  @Delete(':boardId/tasks/:id')
  async delTask(@Param('id') id: string) {
    return await this.service.delTask(id);
  }
}
