package be.thomas.whattoeat.api;

import be.thomas.whattoeat.domain.Ingredient;
import be.thomas.whattoeat.domain.PreparationStep;
import be.thomas.whattoeat.domain.Recipe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static be.thomas.whattoeat.domain.Ingredient.Builder.anIngredient;
import static be.thomas.whattoeat.domain.PreparationStep.Builder.aPreparationStep;
import static be.thomas.whattoeat.domain.Recipe.Builder.aRecipe;
import static com.google.common.collect.Lists.newArrayList;
import static java.util.UUID.randomUUID;

@RestController
@RequestMapping("/api/ui/recipes")
public class RecipeResource {

    private List<Recipe> recipes = newArrayList(aRecipe()
            .withId(randomUUID().toString())
            .withName("Steak tartaar")
            .withAmountOfPeople(4)
            .withLabel("Vlees")
            .withImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnrg2JkDa_JpoIKYBmRh3Kee4YGXU74ybbRqevyDDSOuAn_4Q")
            .withTimeInMinutes(120)
            .withPreparationSteps(newArrayList(aPreparationStep()
                    .withDescription("Dit is step 1")
                    .build(),
                    aPreparationStep()
                            .withDescription("En step twee")
                            .build(),
                    aPreparationStep()
                            .withDescription("En nog een stapke")
                            .build() ))
            .withIngredients(newArrayList(anIngredient()
                    .withName("Veel vlees")
                    .build(),
                    anIngredient()
                            .withName("Een eitje")
                            .build(),
                    anIngredient()
                            .withName("Niet zo veel sla")
                            .build()))
            .build());

    @GetMapping("")
    public List<Recipe> getAllRecipes(){
        return this.recipes;
    }
}
