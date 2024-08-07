import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleRecord } from './battle-record.entity';
import { BattleRecordService } from './battle-record.service';
import { BattleRecordController } from './battle-record.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BattleRecord])],
  providers: [BattleRecordService],
  controllers: [BattleRecordController],
})
export class BattleRecordModule {}
