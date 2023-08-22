const { Schema, model } = require("mongoose");
const Ingredients = require("./Ingredients");
const Liquor = require("./Liquor");

const cocktailsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created: {
      type: String,
    },
    base: [Liquor.schema],
    ingredients: [Ingredients.schema],
    build: {
      type: String,
    },
    glassIce: {
      type: String,
    },
    garnish: {
      type: String,
    },
    lowABV: {
      type: Boolean,
    },
    recipe: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Cocktails = model("cocktails", cocktailsSchema);

module.exports = Cocktails;
