import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Array<Recipe>;
  @Output() onRecipeSelected: EventEmitter<number> = new EventEmitter();
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  selectRecipe(id: number) {
    this.onRecipeSelected.emit(id);
  }
  searchTermEntered(term: string) {
    this.searchTerm.emit(term);
  }
}
