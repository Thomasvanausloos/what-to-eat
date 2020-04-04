package be.thomas.whattoeat.api;


import be.thomas.whattoeat.Application;
import be.thomas.whattoeat.SecurityConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.inject.Inject;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(
    classes = {
        Application.class,
        SecurityConfig.class
    })
public class RecipeResourceTest {

    @Inject
    private RecipeResource recipeResource;

    @Test
    public void getAllRecipes_returnsAllRecipes() {

    }
}