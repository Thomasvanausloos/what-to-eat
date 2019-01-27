package be.thomas.whattoeat.api;

import be.thomas.whattoeat.domain.Recipe;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

import static be.thomas.whattoeat.domain.Ingredient.Builder.anIngredient;
import static be.thomas.whattoeat.domain.PreparationStep.Builder.aPreparationStep;
import static be.thomas.whattoeat.domain.Recipe.Builder.aRecipe;
import static com.google.common.collect.Lists.newArrayList;
import static java.util.UUID.randomUUID;

@RestController
@RequestMapping("/api/ui/recipes")
public class RecipeResource {

    private Recipe steakTartaar= aRecipe()
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
                .build()))
        .withIngredients(newArrayList(anIngredient()
                .withName("Veel vlees")
                .build(),
            anIngredient()
                .withName("Een eitje")
                .build(),
            anIngredient()
                .withName("Niet zo veel sla")
                .build()))
        .build();

    private Recipe steakBearnaise = aRecipe()
        .withId(randomUUID().toString())
        .withName("Steak Bearnaise")
        .withAmountOfPeople(4)
        .withLabel("Vlees")
        .withImageUrl("https://img.static-rmg.be/a/food/image/q75/w640/h400/13933/steak-met-bearnaise.jpg")
        .withTimeInMinutes(40)
        .withPreparationSteps(newArrayList(aPreparationStep()
                .withDescription("Dit is step 1")
                .build(),
            aPreparationStep()
                .withDescription("En step twee")
                .build(),
            aPreparationStep()
                .withDescription("En nog een stapke")
                .build()))
        .withIngredients(newArrayList(anIngredient()
                .withName("Veel goeie steak")
                .build(),
            anIngredient()
                .withName("Some other stuff om bearnaise saus te maken")
                .build(),
            anIngredient()
                .withName("Niet te veel sla")
                .build()))
        .build();

    private Recipe pastaCarbonara = aRecipe()
        .withId(randomUUID().toString())
        .withName("Pasta Carbonare")
        .withAmountOfPeople(4)
        .withLabel("Pasta")
        .withImageUrl("https://img.static-rmg.be/a/food/image/q75/w1280/h720/17146/knorr-bouillonketeltje.jpg")
        .withTimeInMinutes(30)
        .withPreparationSteps(newArrayList(aPreparationStep()
                .withDescription("Pasta koken")
                .build(),
            aPreparationStep()
                .withDescription("Kaas raspen")
                .build(),
            aPreparationStep()
                .withDescription("Spek bakken")
                .build()))
        .withIngredients(newArrayList(anIngredient()
                .withName("Pasta")
                .build(),
            anIngredient()
                .withName("Een eitje")
                .build(),
            anIngredient()
                .withName("Room")
                .build(),
            anIngredient()
                .withName("Parmezaan kaas")
                .build()))
        .build();

    private Recipe pastaZalm = aRecipe()
        .withId(randomUUID().toString())
        .withName("Pasta Zalm")
        .withAmountOfPeople(4)
        .withLabel("Pasta")
        .withImageUrl("https://i1.wp.com/kitchenista.nl/wp-content/uploads/2017/01/pasta-gerooktezalm-dille.jpg?fit=600%2C320&ssl=1")
        .withTimeInMinutes(50)
        .withPreparationSteps(newArrayList(aPreparationStep()
                .withDescription("Dit is step 1")
                .build(),
            aPreparationStep()
                .withDescription("En step twee")
                .build(),
            aPreparationStep()
                .withDescription("En nog een stapke")
                .build()))
        .withIngredients(newArrayList(anIngredient()
                .withName("zalm")
                .build(),
            anIngredient()
                .withName("pasta")
                .build(),
            anIngredient()
                .withName("room")
                .build()))
        .build();

    private Recipe stoofveelMetFriet = aRecipe()
        .withId(randomUUID().toString())
        .withName("Stoofvlees met frietjes")
        .withAmountOfPeople(4)
        .withLabel("Vlees")
        .withImageUrl("https://www.mydibel.be/sites/default/files/styles/blog_header/public/blog_thumbs/2_friet_stoverij.png?itok=f4H7xNoe")
        .withTimeInMinutes(120)
        .withPreparationSteps(newArrayList(aPreparationStep()
                .withDescription("Dit is step 1")
                .build(),
            aPreparationStep()
                .withDescription("En step twee")
                .build(),
            aPreparationStep()
                .withDescription("En nog een stapke")
                .build()))
        .withIngredients(newArrayList(anIngredient()
                .withName("Veel stoofvlees")
                .build(),
            anIngredient()
                .withName("Frietjes")
                .build(),
            anIngredient()
                .withName("Majonaise")
                .build()))
        .build();

    private List<Recipe> recipes = newArrayList(steakTartaar, pastaCarbonara, pastaZalm, stoofveelMetFriet, steakBearnaise);


//    @CrossOrigin
    @GetMapping("")
    public List<Recipe> getAllRecipes() {
        return this.recipes;
    }
}
