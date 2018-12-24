import {Routes} from "@angular/router";
import {DisplayRecipeComponent} from "./recipes/display-recipe/display-recipe.component";
import {ResipeDashboardComponent} from "./recipes/resipe-dashboard/resipe-dashboard.component";
import {AddRecipeContainerComponent} from "./recipes/add-recipe-container/add-recipe-container.component";
import {EditRecipeContainerComponent} from "./recipes/edit-recipe-container/edit-recipe-container.component";
import {WeekComponent} from "./planning/week/week.component";
import {PlanningFeatureGuard} from "./security/guard/planning-feature.guard";
// TODO: split routes according to module
export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "detail/:id", component: DisplayRecipeComponent },
  { path: "add", component: AddRecipeContainerComponent },
  { path: "edit/:id", component: EditRecipeContainerComponent },
  { path: "home", component: ResipeDashboardComponent },
  { path: "planning", component: WeekComponent, canActivate: [PlanningFeatureGuard] },
  { path: "**", redirectTo: "" }
];
