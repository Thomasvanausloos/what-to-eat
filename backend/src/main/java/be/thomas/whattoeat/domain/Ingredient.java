package be.thomas.whattoeat.domain;

public class Ingredient {

    private String name;

    private Ingredient() {
    }

    public String getName() {
        return name;
    }

    public static class Builder {

        private Ingredient ingredient;

        private Builder() {
            this.ingredient = new Ingredient();
        }

        public static Builder anIngredient() {
            return new Builder();
        }

        public Builder withName(String name) {
            this.ingredient.name = name;
            return this;
        }

        public Ingredient build(){
            return this.ingredient;
        }

    }
}
