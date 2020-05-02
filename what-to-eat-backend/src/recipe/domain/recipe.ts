import {Ingredient} from './ingredient';

export class Recipe{

    constructor(
       private name: string,
       private description: string,
       private preparationSteps: string,
       private preparationTime: Date,
       private ingredients: Array<Ingredient> = [],
    ) {}

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPreparationSteps(): string {
        return this.preparationSteps;
    }

    getPreparationTime(): Date {
        return this.preparationTime;
    }

    getIngredients(): Array<Ingredient> {
        return this.ingredients;
    }

}
