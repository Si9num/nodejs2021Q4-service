import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('boards')
export class Board extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column({ type: 'json', nullable: true })
  columns: string[];
  constructor() {
    super();
    this.id = `${uuidv4()}`;
    this.title = '';
    this.columns = [];
  }
}
