import { Body, Controller, Get, Post } from '@nestjs/common';
import { BattleRecordService } from './battle-record.service';
import { BattleRecord } from './battle-record.entity';

@Controller('records')
export class BattleRecordController {
  constructor(
    private readonly battleRecordService: BattleRecordService
  ){}

  @Get()
  findAll(){
    return this.battleRecordService.findAll();
  }

  @Post()
  create(@Body('record') jsonString: string){
    return this.battleRecordService.create(jsonString);
  }
}
