import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Recipe} from './recipe';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeService {
  recipes: Array<Recipe>;

  constructor(private httpClient: HttpClient) {
    this.getAllRecipes().subscribe(allRecipes => this.recipes = allRecipes);
  }

  getAllRecipes(): Observable<Array<Recipe>> {
    return this.httpClient.get<Recipe[]>('http://localhost:8080/api/ui/recipes');
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
      map(recipes => recipes.filter(recipe => recipe.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        || recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    // return of(this.recipes.filter(recipe => recipe.name.toLowerCase().startsWith(searchTerm.toLowerCase())));
  }
}
