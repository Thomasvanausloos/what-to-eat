import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-resipe-dashboard',
  templateUrl: './resipe-dashboard.component.html',
  styleUrls: ['./resipe-dashboard.component.css']
})
export class ResipeDashboardComponent implements OnInit {

  randomRecipe: Recipe;
  latestAddedRecipe: Recipe;
  allRecipes$: Observable<Array<Recipe>>;

  constructor(private router: Router,
              private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.allRecipes$ = this.recipeService.getAllRecipes();
    this.randomRecipe = {
      id: 2,
      ingredients: ["banaan", "chocolade", "slagroom"],
      preparationSteps: [
        "This is step one, bla bla bla ....",
        "This is a second step, cool the pasta etc ...."
      ],
      timeInMinutes: 30,
      name: "Steak tartaar",
      label: "vlees",
      imageUrl:
        "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/Knorr_SpaghettiCarbonara_01_2013_DRUKWERK_RGB_KL.jpg",
      amountOfPeople: 2
    };

    this.latestAddedRecipe = {
      id: 3,
      ingredients: ["pasta", "ei", "room", "parmezaan", "peper", "zout", "spek"],
      preparationSteps: [
        "Breng een kookpot water aan de kook en kook de pasta",
        "Bak het spek goudbruin",
        "Scheid het eigeel van het eiwit",
        "Voeg de room, een snuifje peper en de helft van de parmezaan toe aan het eigeel. Klop dit nu op zodat alles goed door mekaar gemeng is",
        "Giet de pasta af en voeg het spek en het eigeel toe. Goed mengen en warm serveren!"
      ],
      timeInMinutes: 30,
      name: "Chocolade Cake",
      label: "dessert",
      imageUrl:
        "https://img.static-smb.be/a/food/image/q75/w640/h400/15627/steak-tartaar-basisrecept.jpg",
      amountOfPeople: 3
    };

  }

  routeToRecipe(event) {
    console.log(event);
    this.router.navigate(["detail", event.valueOf()]);
  }


}
