import { configOpt } from './common/config';
import { app } from './app';

app.listen(`${configOpt.PORT}`, () =>
  console.log(`App is running on http://localhost:${configOpt.PORT}`)
);
