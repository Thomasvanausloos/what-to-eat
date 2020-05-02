import {Recipe} from '../domain/recipe';
import {Ingredient} from '../domain/ingredient';
import {Unit} from '../domain/unit';

export interface IRecipeRepo {
    getAllRecipes(): Array<Recipe>;
}
