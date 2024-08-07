import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BattleRecord{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: "{}"})
  record: String;
}