import cors from 'cors';
import express from 'express';
import { createApiRouter } from './routes/api';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());
app.use(cors());

app.use('/api', createApiRouter(baseUrl));

app.use((_request, response) => {
  response.status(404).json({ error: 'Not found' });
});

export { app };

if (require.main === module) {
  app.listen(port, () => {
    console.log(`OctoFit API listening on port ${port}`);
  });
}
