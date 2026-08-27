import { Router } from 'express';

export function createApiRouter(baseUrl: string): Router {
  const router = Router();

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

  return router;
}
