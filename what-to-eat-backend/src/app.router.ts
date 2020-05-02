import Router from 'express-promise-router';
import ApiRouter from './api.router'


const appRouter = Router();

appRouter.use('/api', ApiRouter);

export default appRouter;
