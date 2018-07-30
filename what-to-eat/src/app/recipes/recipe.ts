export class Recipe {
  id: number;
  name: string;
  label: string;
  timeInMinutes: number;
  amountOfPeople: number;
  imageUrl: string;
  ingredients: Array<string>;
  preparationSteps: Array<string>;
}
