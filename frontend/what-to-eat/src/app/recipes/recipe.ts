export class Recipe {
  id: number;
  name: string;
  label: string;
  timeInMinutes: number;
  amountOfPeople: number;
  imageUrl: string;
  ingredients: Array<string>;
  preparationSteps: Array<string>;

  constructor() {
    this.amountOfPeople = 4;
    this.imageUrl = '';
    this.ingredients = new Array<string>();
    this.preparationSteps = new Array<string>();
  }
}
