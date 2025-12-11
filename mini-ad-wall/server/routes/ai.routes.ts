import Router from 'koa-router';
import aiController from '../controllers/ai.controller';

const router = new Router({
    prefix: '/api/ai'
});

router.post('/creative', aiController.generateCreative);

router.post('/strategy', aiController.generateStrategy);

export default router;

