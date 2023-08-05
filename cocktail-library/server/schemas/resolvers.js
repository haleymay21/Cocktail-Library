// const { AuthenticationError } = require("apollo-server-express");
const { Ingredients, Cocktails } = require("../models");

const resolvers = {
  Query: {
    findAll: async (parent, args) => {
      const allIngredients = await Ingredients.find();
      console.log(allIngredients);
      return allIngredients;
    },

    // add other queries here
    findCocktails: async (parent, args) => {
      const allCocktails = await Cocktails.find();
      console.log(allCocktails);
      return allCocktails;
    },
  },
};

module.exports = resolvers;
