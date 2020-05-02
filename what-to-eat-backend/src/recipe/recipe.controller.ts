import {Request, Response} from 'express';
import {IRecipeRepo} from './repository/I-recipe.repo';
import {RecipeRepo} from './repository/recipe.repo';

export class RecipeController {

    private static INSTANCE: RecipeController;
    private recipeRepo: IRecipeRepo;

    private constructor() {
        this.recipeRepo = RecipeRepo.getInstance();
    }

    static getInstance(): RecipeController {
        if (!this.INSTANCE) {
            this.INSTANCE = new RecipeController();
        }
        return this.INSTANCE;
    }


    async getAllRecipes(req: Request, res: Response) {
        const allRecipes = await this.recipeRepo.getAllRecipes();
        return res.send(JSON.stringify(allRecipes));
    }
}
