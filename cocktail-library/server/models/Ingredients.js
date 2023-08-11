const { Schema, model } = require("mongoose");

const ingredientsSchema = new Schema(
  {
    name: {
      type: String,
    },
    typeOf: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Ingredients = model("ingredients", ingredientsSchema);

module.exports = Ingredients;
