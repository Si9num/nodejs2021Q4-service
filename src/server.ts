import { configOpt } from './common/config';
import { app } from './app';
import { tt } from '../volume-db/connect';

app.listen(`${configOpt.PORT}`, '0.0.0.0', () => {
  tt();
  console.log(`App is running on http://localhost:${configOpt.PORT}`);
});
