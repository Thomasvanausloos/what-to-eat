import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  amountSelect: Array<number>;
  ingredients: Array<string>;
  showNewIngredientInputField: boolean;
  showNewPreparationStepInputField: boolean;
  newIngredient: string;
  preparationSteps: Array<string>;

  constructor() {}

  ngOnInit() {
    this.amountSelect = [1, 2, 3, 4, 5, 6, 7, 8];
    this.ingredients = ["wortel", "aardappel", "tomaat"];
    this.showNewIngredientInputField = false;
    this.newIngredient = "";
    this.showNewPreparationStepInputField = false;
    this.preparationSteps = ["This is step one, bla bla bla ...."];
  }

  addNewIngredient(): void {
    this.showNewIngredientInputField = true;
  }

  addNewPreparationStep(): void {
    this.showNewPreparationStepInputField = true;
  }

  inputKeyDown(event, value: string) {
    if (event.key === "Enter") {
      this.ingredients.push(value);
      this.showNewIngredientInputField = false;
    }
  }

  preparationStepsKeyDown(event, value: string) {
    if (event.key === "Enter") {
      this.preparationSteps.push(value);
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
}
