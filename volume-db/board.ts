import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('boards')
export class Board {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column({ type: 'simple-json', nullable: true })
  column: {
    id: string;
    title: string;
    order: number;
  };
  constructor() {
    this.id = uuidv4();
    this.title = '';
    this.column = {
      id: '',
      title: '',
      order: 1,
    };
  }
}
