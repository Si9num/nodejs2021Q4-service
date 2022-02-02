import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { NestBoardService } from './nestBoard.service';

@Controller()
export class NestBoardController {
  constructor(private service: NestBoardService) {}
  @Get('/boards')
  getUser(req: any, res: any) {
    return this.service.getBoard(req, res);
  }
  @Get('/boards/:id')
  getIdUser(req: any, res: any) {
    return this.service.getIdBoard(req, res);
  }
  @Post('/boards')
  async postUser(req: any, res: any) {
    return this.service.postBoard(req, res);
  }

  @Put('/boards/:id')
  async putUser(req: any, res: any) {
    return this.service.putBoard(req, res);
  }
  @Delete('/boards/:id')
  delUser(req: any, res: any) {
    return this.service.delBoard(req, res);
  }
}
