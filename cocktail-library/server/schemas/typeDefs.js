const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Ingredients {
    _id: ID
    name: String
    typeOf: String
  }

  type Liquor {
    _id: ID
    name: String
    typeOf: String
  }

  type Cocktails {
    _id: ID
    name: String
    created: String
    base: [Liquor]
    ingredients: [Ingredients]
    build: String
    glassIce: String
    garnish: String
    lowABV: Boolean
    recipe: String
  }

  type Query {
    ingredients: [Ingredients]
    cocktails: [Cocktails]
    liquor: [Liquor]
  }
`;

module.exports = typeDefs;
