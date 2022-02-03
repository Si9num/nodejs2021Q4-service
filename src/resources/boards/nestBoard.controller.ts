import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Boarddto } from './nestBoard.dto';

import { NestBoardService } from './nestBoard.service';

@Controller('/boards')
export class NestBoardController {
  constructor(private service: NestBoardService) {}
  @Get()
  async getBoard() {
    return await this.service.getBoard();
  }
  @Get(':id')
  async getIdBoard(@Param('id') id: string) {
    return await this.service.getIdBoard(id);
  }
  @Post()
  async postBoard(@Body() dto: Boarddto) {
    return await this.service.postBoard(dto);
  }

  @Put(':id')
  async putBoard(@Param('id') id: string, @Body() dto: Boarddto) {
    return await this.service.putBoard(id, dto);
  }
  @Delete(':id')
  async delBoard(@Param('id') id: string) {
    await this.service.delBoard(id);
    return;
  }
}
