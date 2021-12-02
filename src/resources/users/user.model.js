const {
  getUser,
  postUser,
  getIdUser,
  putUser,
  delUser,
} = require('./user.router');

const UserGet = {
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
const UserGetId = {
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
const UserPost = {
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
const UserPut = {
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
const UserDel = {
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

module.exports = { UserGet, UserPost, UserGetId, UserPut, UserDel };
