import { Router } from 'express';

const router = Router();
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

router.get('/', (_request, response) => {
  response.json({
    service: 'octofit-api',
    baseUrl,
    resources: ['users', 'teams', 'activities', 'leaderboard', 'workouts'],
  });
});

router.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

for (const resourceName of ['users', 'teams', 'activities', 'leaderboard', 'workouts']) {
  router.get(`/${resourceName}`, (_request, response) => {
    response.json([]);
  });
}

export default router;
