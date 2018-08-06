import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe";
import { Observable } from "../../../../node_modules/rxjs";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-display-recipe",
  templateUrl: "./display-recipe.component.html",
  styleUrls: ["./display-recipe.component.css"]
})
export class DisplayRecipeComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    // {
    //   ingredients: ["wortel", "aardappel", "tomaat"],
    //   preparationSteps: [
    //     "This is step one, bla bla bla ....",
    //     "This is a second step, cool the pasta etc ...."
    //   ],
    //   timeInMinutes: 120,
    //   name: "Pasta Carbonara",
    //   label: "pasta",
    //   imageUrl:
    //     "https://www.howtocookthat.net/public_html/wp-content/uploads/2015/09/IMG_9495-550x413.jpg?x19907",
    //   amountOfPeople: 4
    // };
  }

  ngOnInit() {
    this.recipe$ = this.recipeService.getRecipeById(
      Number(this.route.snapshot.paramMap.get("id"))
    );
  }
}
