import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pokemon{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  attack: String

  @Column()
  defense: String

  @Column()
  hp: number

  @Column()
  speed: number

  @Column({default: 'Type'})
  Type: String

  @Column()
  imageUrl: String
}