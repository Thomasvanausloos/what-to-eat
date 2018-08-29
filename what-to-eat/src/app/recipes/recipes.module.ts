import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material";
import { TeaserRecipeComponent } from './teaser-recipe/teaser-recipe.component';
import { ResipeDashboardComponent } from './resipe-dashboard/resipe-dashboard.component';
import { EditRecipeContainerComponent } from './edit-recipe-container/edit-recipe-container.component';
import { AddOrEditRecipeComponent } from './add-or-edit-recipe/add-or-edit-recipe.component';
import { AddRecipeContainerComponent } from './add-recipe-container/add-recipe-container.component';

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
    MatIconModule,
    FormsModule,
    MatToolbarModule
  ],
  exports: [
    DisplayRecipeComponent,
    RecipeListComponent,
    TeaserRecipeComponent,
    ResipeDashboardComponent],
  declarations: [
    DisplayRecipeComponent,
    RecipeListComponent,
    TeaserRecipeComponent,
    ResipeDashboardComponent,
    EditRecipeContainerComponent,
    AddOrEditRecipeComponent,
    AddRecipeContainerComponent
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
