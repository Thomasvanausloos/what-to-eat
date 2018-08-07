import { Injectable } from "@angular/core";
import { RECIPE_DATA } from "./data";
import { of, Observable } from "rxjs";
import { map} from "rxjs/operators";
import { Recipe } from "./recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipes: Array<Recipe>;

  constructor() {
    this.recipes = RECIPE_DATA;
  }

  getAllRecipes() {
    return of(this.recipes);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return of(this.recipes).pipe(
      map(recipes => recipes.filter(recipe => recipe.id === id)[0])
    );
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }
}
