import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../recipe';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-edit-recipe-container',
  templateUrl: './edit-recipe-container.component.html',
  styleUrls: ['./edit-recipe-container.component.css']
})
export class EditRecipeContainerComponent implements OnInit {

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  recipeToEdit$: Observable<Recipe>;

  ngOnInit() {
    this.recipeToEdit$ = this.recipeService.getRecipeById(Number(this.route.snapshot.paramMap.get("id")));
  }

  updateRecipe(recipe){
    this.recipeService.updateRecipe(recipe);
    this.router.navigate(["/home"]);
  }

}
