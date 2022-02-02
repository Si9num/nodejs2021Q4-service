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

@Controller('/boards/:id/tasks')
export class NestTaskController {
  constructor(private service: NestTaskService) {}
  @Get()
  getUser() {
    return this.service.getTask();
  }
  @Get('/:id')
  getIdUser(@Param('id') id: string) {
    return this.service.getIdTask(id);
  }
  @Post()
  async postUser(@Body() dto: Taskdto) {
    return this.service.postTask(dto);
  }

  @Put('/:id')
  async putUser(@Param('id') id: string, @Body() dto: Taskdto) {
    return this.service.putTask(id, dto);
  }
  @Delete('/:id')
  delUser(@Param('id') id: string) {
    return this.service.delTask(id);
  }
}
