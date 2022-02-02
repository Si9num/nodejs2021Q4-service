import { v4 as uuidv4 } from 'uuid';

export class Userdto {
  id = `${uuidv4()}`;
  name!: string;
  login!: string;

  password!: string;
}
