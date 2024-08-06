import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
