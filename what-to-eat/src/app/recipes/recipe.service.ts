import { Injectable } from "@angular/core";
import { RECIPE_DATA } from "./data";
import { of, Observable } from "rxjs";
import { map, first } from "rxjs/operators";
import { Recipe } from "./recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipes$: Observable<Array<Recipe>>;

  constructor() {
    this.recipes$ = of(RECIPE_DATA);
  }

  getAllRecipes() {
    return this.recipes$;
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.recipes$.pipe(
      map(recipes => recipes.filter(recipe => recipe.id === id)[0])
    );
  }
}
