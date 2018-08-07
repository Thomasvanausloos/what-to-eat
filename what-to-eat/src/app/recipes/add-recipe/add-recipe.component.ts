import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  recipeToAdd: Recipe;

  amountSelect: Array<number>;
  ingredients: Array<string>;
  showNewIngredientInputField: boolean;
  showNewPreparationStepInputField: boolean;
  newIngredient: string;
  preparationSteps: Array<string>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.showNewIngredientInputField = false;
    this.showNewPreparationStepInputField = false;
    this.recipeToAdd = new Recipe();
    this.recipeToAdd.id = 4;
    this.amountSelect = [1, 2, 3, 4, 5, 6, 7, 8];
    this.ingredients = [];
    this.newIngredient = "";
    // this.preparationSteps = ["This is step one, bla bla bla ...."];
  }

  addNewIngredient(): void {
    this.showNewIngredientInputField = true;
  }

  addNewPreparationStep(): void {
    this.showNewPreparationStepInputField = true;
  }

  inputKeyDown(event, value: string) {
    if (event.key === "Enter" || event.key === 'Tab') {
      this.recipeToAdd.ingredients.push(value);
      this.showNewIngredientInputField = false;
    }
  }

  preparationStepsKeyDown(event, value: string) {
    if (event.key === "Enter" || event.key === 'Tab') {
      this.recipeToAdd.preparationSteps.push(value);
      this.showNewPreparationStepInputField = false;
    }
  }
  deleteIngredient(ingredientToRemove: string) {
    this.ingredients = this.ingredients.filter(
      ingredient => ingredient !== ingredientToRemove
    );
  }

  deleteStep(stepToRemove: string) {
    // this.preparationSteps = this.preparationSteps.filter(
    // step => step != stepToRemove
    // );§
  }

  saveRecipe() {
    console.log(this.recipeToAdd);
    this.recipeService.addRecipe(this.recipeToAdd);
  }
}
