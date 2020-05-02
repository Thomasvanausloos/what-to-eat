import {IRecipeRepo} from './I-recipe.repo';
import {Recipe} from '../domain/recipe';
import {Ingredient} from '../domain/ingredient';
import {Unit} from '../domain/unit';

export class RecipeRepo implements IRecipeRepo{

    private static INSTANCE: RecipeRepo;

    private constructor() {
    }

    static getInstance(): RecipeRepo {
        if (!this.INSTANCE) {
            this.INSTANCE = new RecipeRepo();
        }
        return this.INSTANCE;
    }

    getAllRecipes(): Array<Recipe> {
        return allRecipes;
    }


}


const allRecipes: Array<Recipe> =
    [
        new Recipe('Pannenkoenen',
            'Dit is een recept om heel lekkere pannenkoeken te maken',
            'Begin met het deeg te maken, bak het deeg in een pannenkoekenpan en smullen maar!',
            new Date(0,0,0,0,30,0),
            [
                new Ingredient('ei', 3, Unit.STUK),
                new Ingredient('bloem', 250, Unit.GRAMM),
                new Ingredient('melk', 500, Unit.MILLILITER),
                new Ingredient('vanille suiker', 1, Unit.STUK),
            ]
        ),
        new Recipe('Banaan havermout pannenkoeken',
            'Dit is een recept om heel lekkere banaan-havermout pannenkoeken te maken',
            'Begin met het deeg te maken, bak het deeg in een pannenkoekenpan en smullen maar!',
            new Date(0,0,0,0,30,0),
            [
                new Ingredient('ei', 3, Unit.STUK),
                new Ingredient('havermout', 200, Unit.GRAMM),
                new Ingredient('melk', 300, Unit.MILLILITER),
                new Ingredient('vanille suiker', 1, Unit.STUK),
                new Ingredient('banaan', 1, Unit.STUK),
            ]
        ),

    ];
