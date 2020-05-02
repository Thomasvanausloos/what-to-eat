import Router from 'express-promise-router';
import {RecipeController} from './recipe.controller';
import {Request, Response} from 'express';


const recipeRouter = Router();
const recipeController = RecipeController.getInstance();

recipeRouter.get('/', (req: Request, res: Response) => recipeController.getAllRecipes(req, res));
recipeRouter.get('/test', (req, res) => console.log('recipe router test works'));


export default recipeRouter;
