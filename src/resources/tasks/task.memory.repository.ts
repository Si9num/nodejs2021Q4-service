import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tasks')
export class Task extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ type: 'integer', nullable: true })
  order?: number | null = null;

  @Column()
  description: string;

  @Column({ type: 'varchar', nullable: true })
  userId: string | null = null;

  @Column({ type: 'varchar', nullable: true })
  boardId: string | null = null;

  @Column({ type: 'varchar', nullable: true })
  columnId: string | null = null;

  constructor() {
    super();
    this.id = uuidv4();
    this.title = '';
    this.order = 1;
    this.description = '';
    this.userId = '';
    this.boardId = '';
    this.columnId = '';
  }
}
