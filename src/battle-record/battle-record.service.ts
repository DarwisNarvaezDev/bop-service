import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BattleRecord } from './battle-record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BattleRecordService {
  constructor(
    @InjectRepository(BattleRecord)
    private BattleRecordRepository: Repository<BattleRecord>
  ){}

  findAll(){
    return this.BattleRecordRepository.find();
  }

  create(jsonString: string){
    const battleRecord = new BattleRecord;
    battleRecord.record = jsonString;
    return this.BattleRecordRepository.save(battleRecord);
  }
}
