import { v4 as uuidv4 } from 'uuid';

export class Taskdto {
  id = `${uuidv4()}`;
  
  title!: string;

 
  order?: number | null = null;


  description!: string;


  userId: string | null = null;


  boardId: string | null = null;

  
  columnId: string | null = null;
}
