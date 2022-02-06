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
import { Boarddto } from './nestBoard.dto';

import { NestBoardService } from './nestBoard.service';

@Controller('/boards')
export class NestBoardController {
  constructor(private service: NestBoardService) {}
  @UseGuards(Auth)
  @Get()
  async getBoard() {
    return await this.service.getBoard();
  }
  @UseGuards(Auth)
  @Get(':id')
  async getIdBoard(@Param('id') id: string) {
    return await this.service.getIdBoard(id);
  }
  @UseGuards(Auth)
  @Post()
  async postBoard(@Body() dto: Boarddto) {
    return await this.service.postBoard(dto);
  }
  @UseGuards(Auth)
  @Put(':id')
  async putBoard(@Param('id') id: string, @Body() dto: Boarddto) {
    return await this.service.putBoard(id, dto);
  }
  @UseGuards(Auth)
  @Delete(':id')
  async delBoard(@Param('id') id: string) {
    await this.service.delBoard(id);
    return;
  }
}
