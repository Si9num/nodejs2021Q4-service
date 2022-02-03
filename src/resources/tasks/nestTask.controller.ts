import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Taskdto } from './nestTask.dto';

import { NestTaskService } from './nestTask.service';

@Controller('/boards')
export class NestTaskController {
  constructor(private service: NestTaskService) {}
  @Get(':boardId/tasks')
  async getTask() {
    return await this.service.getTask();
  }
  @Get(':boardId/tasks/:id')
  async getIdTask(@Param('id') id: string) {
    return await this.service.getIdTask(id);
  }
  @Post(':boardId/tasks')
  async postTask(@Param('boardId') id: string, @Body() dto: Taskdto) {
    return await this.service.postTask(id, dto);
  }

  @Put(':boardId/tasks/:id')
  async putTask(@Param('id') id: string, @Body() dto: Taskdto) {
    return await this.service.putTask(id, dto);
  }
  @Delete(':boardId/tasks/:id')
  async delTask(@Param('id') id: string) {
    return await this.service.delTask(id);
  }
}
