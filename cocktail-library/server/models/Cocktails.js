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
    mainSpirit: {
      type: String,
    },
    stirredBoozy: {
      type: Boolean,
    },
    fruity: {
      type: Boolean,
    },
    citrusRefreshing: {
      type: Boolean,
    },
    bitter: {
      type: Boolean,
    },
    smokey: {
      type: Boolean,
    },
    glassware: {
      type: String,
    },
    shaken: {
      type: Boolean,
    },
    stirred: {
      type: Boolean,
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
