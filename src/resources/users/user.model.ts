import { FastifyReply, FastifyRequest, FastifySchema } from 'fastify';
import { getUser, postUser, getIdUser, putUser, delUser } from './user.router';

interface schema {
  schema: FastifySchema;
  handler(req: FastifyRequest, res: FastifyReply): void;
}
const UserGet: schema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            login: { type: 'string' },
            password: { type: 'string' },
          },
        },
      },
    },
  },

  handler: getUser,
};
const UserGetId: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          login: { type: 'string' },
          password: { type: 'string' },
        },
      },
    },
  },
  handler: getIdUser,
};
const UserPost: schema = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          login: { type: 'string' },
          // password: { type: 'string' },
        },
      },
    },
  },
  handler: postUser,
};

const UserPut: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          login: { type: 'string' },
          password: { type: 'string' },
        },
      },
    },
  },
  handler: putUser,
};
const UserDel: schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          login: { type: 'string' },
          password: { type: 'string' },
        },
      },
    },
  },
  handler: delUser,
};

export { UserGet, UserPost, UserGetId, UserPut, UserDel, schema };
