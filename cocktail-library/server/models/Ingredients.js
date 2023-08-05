const { Schema, model } = require("mongoose");

const ingredientsSchema = new Schema(
  {
    typeOf: {
      type: String,
      required: true,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Ingredients = model("Ingredients", ingredientsSchema);

module.exports = Ingredients;
