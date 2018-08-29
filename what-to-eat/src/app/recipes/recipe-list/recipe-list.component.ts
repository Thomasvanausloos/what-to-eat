import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe} from "../recipe";
import {Subject} from "rxjs/index";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Array<Recipe>;
  @Output() onRecipeSelected = new EventEmitter();
  searchTerm$: Subject<string> = new Subject<string>();

  constructor(){}

  ngOnInit() {
  }

  selectRecipe(id:number){
    this.onRecipeSelected.emit(id);
  }
}
