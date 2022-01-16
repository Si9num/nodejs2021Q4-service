import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  login: string;
  @Column()
  password: string;

  constructor() {
    super();
    this.id = `${uuidv4()}`;
    this.name = 'name';
    this.login = 'login';
    this.password = 'pass';
  }
}
