import {Unit} from './unit';

export class Ingredient{

    constructor(
       private name: string,
       private amount: number,
       private unit: Unit,
    ) {}
}
