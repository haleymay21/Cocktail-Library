const { Ingredients, Cocktails, Liquor } = require("../models");

const resolvers = {
  Query: {
    ingredients: async (parent, args) => {
      const allIngredients = await Ingredients.find();
      console.log(allIngredients);
      return allIngredients;
    },

    liquor: async (parent, args) => {
      const allLiquor = await Liquor.find();
      console.log(allLiquor);
      return allLiquor;
    },

    cocktails: async (parent, args) => {
      const allCocktails = await Cocktails.find()
        .populate("base")
        .populate("ingredients");
      console.log(allCocktails);
      return allCocktails;
    },
  },
};

module.exports = resolvers;
