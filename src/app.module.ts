import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { dataSourceOptions } from 'db/data-source';
import { BattleRecordModule } from './battle-record/battle-record.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), 
  PokemonModule, BattleRecordModule]
})
export class AppModule {}
