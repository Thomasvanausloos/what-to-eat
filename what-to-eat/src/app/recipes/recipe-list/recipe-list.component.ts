import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Array<Recipe>>;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.recipes$ = this.recipeService.getAllRecipes();
  }

  routeToRecipe(id: number) {
    this.router.navigate(["detail", id]);
  }
}
