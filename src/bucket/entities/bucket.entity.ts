import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bucket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
