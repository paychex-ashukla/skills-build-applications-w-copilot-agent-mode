import { Router } from 'express';
import { getApiBaseUrl } from '../config/api';

const router = Router();

router.get('/', (_request, response) => {
  response.json({
    service: 'octofit-api',
    baseUrl: getApiBaseUrl(),
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
