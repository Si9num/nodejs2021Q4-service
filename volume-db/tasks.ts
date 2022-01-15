import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tasks')
export class Task {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  order: string;
  @Column()
  description: string;
  @Column()
  userId: string;
  @Column()
  boardId: string;
  @Column()
  columnId: string;

  constructor() {
    this.id = uuidv4();
    this.title = '';
    this.order = '';
    this.description = '';
    this.userId = '';
    this.boardId = '';
    this.columnId = '';
  }
}
