package be.thomas.whattoeat.domain;

public class PreparationStep {

    private String description;

    private PreparationStep() {
    }

    public String getDescription() {
        return description;
    }

    public static class Builder {

        private PreparationStep preparationStep;

        private Builder() {
            this.preparationStep = new PreparationStep();
        }

        public static Builder aPreparationStep() {
            return new Builder();
        }


        public Builder withDescription(String description) {
            this.preparationStep.description = description;
            return this;
        }

        public PreparationStep build() {
            return this.preparationStep;
        }
    }
}
