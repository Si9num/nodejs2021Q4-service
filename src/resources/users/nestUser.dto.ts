import { v4 as uuidv4 } from 'uuid';

export class Userdto {
  id!: string;
  name!: string;
  login!: string;

  password!: string;
}
