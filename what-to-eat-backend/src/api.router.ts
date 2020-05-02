import Router from 'express-promise-router';
import recipeRouter from './recipe/recipe.router';
import planningRouter from './planning/planning.router';
import shoppingRouter from './shopping/shopping.router';

const apiRouter = Router();

apiRouter.use('/recipe', recipeRouter);
apiRouter.use('/planning', planningRouter);
apiRouter.use('/shopping', shoppingRouter);

export default apiRouter;
