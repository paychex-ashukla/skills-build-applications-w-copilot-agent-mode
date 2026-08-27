import cors from 'cors';
import express from 'express';
import apiRouter from './routes/api';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.use((_request, response) => {
  response.status(404).json({ error: 'Not found' });
});

export { app };

if (require.main === module) {
  app.listen(port, () => {
    console.log(`OctoFit API listening on port ${port}`);
  });
}
