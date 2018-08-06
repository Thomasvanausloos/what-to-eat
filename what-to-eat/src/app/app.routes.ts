import { Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { DisplayRecipeComponent } from "./recipes/display-recipe/display-recipe.component";
import { AddRecipeComponent } from "./recipes/add-recipe/add-recipe.component";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: RecipeListComponent },
  { path: "detail/:id", component: DisplayRecipeComponent },
  { path: "add", component: AddRecipeComponent },
  { path: "**", redirectTo: "" }
];
