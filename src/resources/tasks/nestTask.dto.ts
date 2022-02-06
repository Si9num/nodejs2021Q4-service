import { v4 as uuidv4 } from 'uuid';

export class Taskdto {
  

  title!: string;

  order?: number | null = null;

  description!: string;

  userId: string | null = null;

  boardId?: string;

  columnId: string | null = null;
}
