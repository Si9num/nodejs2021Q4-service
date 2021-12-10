import {
  getBoard,
  postBoard,
  getIdBoard,
  putBoard,
  delBoard,
} from './board.router';

const BoardGet = {
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
const BoardGetId = {
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
const BoardPost = {
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
const BoardPut = {
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
const BoardDel = {
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

export  { BoardGet, BoardPost, BoardGetId, BoardPut, BoardDel };
