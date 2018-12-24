package be.thomas.whattoeat.domain;

import java.util.List;

public class Recipe {
    public String id;
    public String name;
    public String label;
    public int timeInMinutes;
    public int amountOfPeople;
    public String imageUrl;
    public List<Ingredient> ingredients;
    public List<PreparationStep> preparationSteps;

    private  Recipe() {
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLabel() {
        return label;
    }

    public int getTimeInMinutes() {
        return timeInMinutes;
    }

    public int getAmountOfPeople() {
        return amountOfPeople;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public List<PreparationStep> getPreparationSteps() {
        return preparationSteps;
    }

    public static class Builder{

        private Recipe recipe;

        private Builder() {
            this.recipe = new Recipe();
        }

        public static Builder aRecipe(){
            return new Builder();
        }

        public Builder withId(String id) {
            this.recipe.id = id;
            return this;
        }

        public Builder withName(String name) {
            this.recipe.name = name;
            return this;
        }

        public Builder withLabel(String label) {
            this.recipe.label = label;
            return this;
        }

        public Builder withTimeInMinutes(int timeInMinutes) {
            this.recipe.timeInMinutes = timeInMinutes;
            return this;
        }

        public Builder withAmountOfPeople(int amountOfPeople) {
            this.recipe.amountOfPeople = amountOfPeople;
            return this;
        }

        public Builder withImageUrl(String imageUrl) {
            this.recipe.imageUrl = imageUrl;
            return this;
        }

        public Builder withIngredients(List<Ingredient> ingredients) {
            this.recipe.ingredients = ingredients;
            return this;
        }

        public Builder withPreparationSteps(List<PreparationStep> preparationSteps) {
            this.recipe.preparationSteps = preparationSteps;
            return this;
        }

        public Recipe build(){
            return this.recipe;
        }
    }

}
