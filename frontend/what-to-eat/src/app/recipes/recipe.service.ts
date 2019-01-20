import {Injectable} from '@angular/core';
import {RECIPE_DATA} from './data';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Recipe} from './recipe';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';

interface RecipeData {
  value: Array<Recipe>;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Array<Recipe>;

  constructor(private httpClient: HttpClient) {
    this.recipes = RECIPE_DATA;
  }

  getAllRecipes(): Observable<Array<Recipe>> {
    // return this.httpClient.get<RecipeData>('api/ui/recipes').pipe(tap(data => console.log(data)),map(data => data.value));
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

  calculateNextId(): number {
    return this.recipes.length;
  }

  updateRecipe(recipeToUpdate: Recipe) {
    this.recipes = this.recipes.map(recipe => {
      if (recipe.id === recipeToUpdate.id) {
        return recipeToUpdate;
      } else {
        return recipe;
      }
    });
  }

  filterRecipes(searchTerm: string): Observable<Array<Recipe>> {
    return of(this.recipes).pipe(
      map(recipes => recipes.filter(recipe => recipe.name.toLowerCase().startsWith(searchTerm.toLowerCase()) || recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    // return of(this.recipes.filter(recipe => recipe.name.toLowerCase().startsWith(searchTerm.toLowerCase())));
  }
}
