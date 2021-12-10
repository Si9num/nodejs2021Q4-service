import { getTask, postTask, getIdTask, putTask, delTask } from './task.router';

const TaskGet = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            order: { type: 'number' },
            description: { type: 'string' },
            userId: { type: 'null' },
            boardId: { type: 'string' },
            columnId: { type: 'null' },
          },
        },
      },
    },
  },

  handler: getTask,
};
const TaskGetId = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          order: { type: 'number' },
          description: { type: 'string' },
          userId: { type: 'null' },
          boardId: { type: 'string' },
          columnId: { type: 'null' },
        },
      },
    },
  },
  handler: getIdTask,
};
const TaskPost = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          order: { type: 'number' },
          description: { type: 'string' },
          userId: { type: 'null' },
          boardId: { type: 'string' },
          columnId: { type: 'null' },
        },
      },
    },
  },
  handler: postTask,
};
const TaskPut = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            order: { type: 'number' },
            description: { type: 'string' },
            userId: { type: 'null' },
            boardId: { type: 'string' },
            columnId: { type: 'null' },
          },
        },
      },
    },
  },
  handler: putTask,
};
const TaskDel = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            order: { type: 'string' },
            description: { type: 'string' },
            userId: { type: 'null' },
            boardId: { type: 'string' },
            columnId: { type: 'null' },
          },
        },
      },
    },
  },
  handler: delTask,
};

export { TaskGet, TaskPost, TaskGetId, TaskPut, TaskDel };
