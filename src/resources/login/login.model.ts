import { schema } from '../users/user.model';
import { token } from './login.router';

const login: schema = {
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
  handler: token,
};
export { login };
