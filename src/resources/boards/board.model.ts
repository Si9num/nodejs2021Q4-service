import {
  getBoard,
  postBoard,
  getIdBoard,
  putBoard,
  delBoard,
} from './board.router';
import { schema } from '../users/user.model';

const BoardGet: schema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            columns: {
              type: 'array',
              properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                order: { type: 'number' },
              },
            },
          },
        },
      },
    },
  },

  handler: getBoard,
};
const BoardGetId: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          columns: {
            type: 'array',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              order: { type: 'number' },
            },
          },
        },
      },
    },
  },
  handler: getIdBoard,
};
const BoardPost: schema = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          columns: {
            type: 'array',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              order: { type: 'number' },
            },
          },
        },
      },
    },
  },
  handler: postBoard,
};
const BoardPut: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          columns: {
            type: 'array',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              order: { type: 'number' },
            },
          },
        },
      },
    },
  },
  handler: putBoard,
};
const BoardDel: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          columns: {
            type: 'array',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              order: { type: 'number' },
            },
          },
        },
      },
    },
  },
  handler: delBoard,
};

export { BoardGet, BoardPost, BoardGetId, BoardPut, BoardDel };
