import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { DisplayRecipeComponent } from "./display-recipe/display-recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeService } from "./recipe.service";
import { RouterModule } from "../../../node_modules/@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [AddRecipeComponent, DisplayRecipeComponent, RecipeListComponent],
  declarations: [
    AddRecipeComponent,
    DisplayRecipeComponent,
    RecipeListComponent
  ]
})
export class RecipesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RecipesModule,
      providers: [RecipeService]
    };
  }
}
