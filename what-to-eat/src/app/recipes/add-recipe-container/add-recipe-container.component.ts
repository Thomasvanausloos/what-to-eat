import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-add-recipe-container',
  templateUrl: './add-recipe-container.component.html',
  styleUrls: ['./add-recipe-container.component.css']
})
export class AddRecipeContainerComponent implements OnInit {

  recipeToEdit$: Observable<Recipe>;
  constructor(private router: Router,
              private recipeService: RecipeService
  ) { }

  ngOnInit() {
  }

  setupNewRecipe(){
    let  newRecipe = new Recipe();
    newRecipe.id = this.recipeService.calculateNextId();
    return newRecipe;
  }
  saveRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeService.addRecipe(recipe);
    this.router.navigate(["/home"]);
  }

}
