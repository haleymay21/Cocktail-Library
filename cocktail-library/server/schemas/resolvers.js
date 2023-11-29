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

    cocktail: async (parent, { name }, context, info) => {
      // Use Mongoose to query the MongoDB database for a cocktail by name
      try {
        const cocktail = await Cocktails.findOne(
          { name },
          { name: 1, created: 1 }
        );
        return cocktail;
      } catch (error) {
        throw new Error(`Error fetching cocktail by name: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
