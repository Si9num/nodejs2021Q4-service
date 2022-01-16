import { configOpt } from './common/config';
import { app } from './app';

app.listen(`${configOpt.PORT}`, '0.0.0.0', () => {
  console.log(`App is running on http://localhost:${configOpt.PORT}`);
});
