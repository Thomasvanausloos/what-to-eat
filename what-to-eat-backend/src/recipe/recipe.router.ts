import Router from 'express-promise-router';


const recipeRouter = Router();

recipeRouter.get('/test', (req, res) => console.log('recipe router test works'));

export default recipeRouter;
