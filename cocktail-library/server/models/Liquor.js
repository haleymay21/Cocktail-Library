const { Schema, model } = require("mongoose");

const liquorSchema = new Schema(
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

const Liquor = model("liquor", liquorSchema);

module.exports = Liquor;