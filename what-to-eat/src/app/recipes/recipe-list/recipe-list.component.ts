import { Component, OnInit } from "@angular/core";
import { Observable } from "../../../../node_modules/rxjs";
import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Array<Recipe>>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes$ = this.recipeService.getAllRecipes();
  }
}
