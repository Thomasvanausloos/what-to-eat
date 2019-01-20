import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-add-or-edit-recipe',
  templateUrl: './add-or-edit-recipe.component.html',
  styleUrls: ['./add-or-edit-recipe.component.css']
})
export class AddOrEditRecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() onBewaar: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  ingredientToAdd: string = '';

  amountSelect: Array<number>;
  showNewIngredientInputField: boolean;
  showNewPreparationStepInputField: boolean;
  preparationSteps: Array<string>;

  constructor() {}

  ngOnInit() {
    this.showNewIngredientInputField = false;
    this.showNewPreparationStepInputField = false;
    this.amountSelect = [1, 2, 3, 4, 5, 6, 7, 8];
    // this.preparationSteps = ["This is step one, bla bla bla ...."];
  }


  addNewIngredient(): void {
    this.showNewIngredientInputField = true;
  }

  addNewPreparationStep(): void {
    this.showNewPreparationStepInputField = true;
  }

  inputKeyDown(event, value: string) {
    if (event.key === "Enter" || event.key === "Tab") {
    console.log(this.recipe);
      console.log(this.recipe.ingredients);
      this.recipe.ingredients.push(value);
      console.log(this.recipe.ingredients);
      this.showNewIngredientInputField = false;
      event.target.value = '';
    }
  }

  preparationStepsKeyDown(event, value: string) {
    if (event.key === "Enter" || event.key === "Tab") {
      this.recipe.preparationSteps.push(value);
      this.showNewPreparationStepInputField = false;
    }
  }
  deleteIngredient(ingredientToRemove: string) {
    console.log('delete');
    this.recipe.ingredients = this.recipe.ingredients.filter(
      ingredient => ingredient !== ingredientToRemove
    );
  }
  saveRecipe(){
    console.log('in save');
    this.onBewaar.emit(this.recipe);
  }

  deleteStep(stepToRemove: string) {
    this.recipe.preparationSteps = this.recipe.preparationSteps.filter(
    step => step != stepToRemove
    );
  }

}
