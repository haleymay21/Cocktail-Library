const { Schema, model } = require("mongoose");

const cocktailsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created: {
      type: String,
    },
    base: [{
      type: Schema.Types.ObjectId,
      ref:"liquor"
    }],
    ingredients: [{
      type: Schema.Types.ObjectId,
      ref:"ingredients"
    }],
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
