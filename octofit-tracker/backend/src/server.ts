import cors from 'cors';
import express from 'express';
import { API_PORT } from './config/api';
import apiRouter from './routes/api';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.use((_request, response) => {
  response.status(404).json({ error: 'Not found' });
});

export { app };

if (require.main === module) {
  app.listen(API_PORT, () => {
    console.log(`OctoFit API listening on port ${API_PORT}`);
  });
}
