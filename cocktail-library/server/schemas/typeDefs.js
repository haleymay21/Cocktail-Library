const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Ingredients {
    _id: ID
    name: String
    typeOf: String
  }

  type Cocktails {
    _id: ID
    name: String
    created: String
    mainSpirit: String
    stirredBoozy: Boolean
    fruity: Boolean
    citrusRefreshing: Boolean
    bitter: Boolean
    smokey: Boolean
    glassware: String
    shaken: Boolean
    stirred: Boolean
  }

  // type Query {
  //   me: User
  //   findAll: [Ingredients]
  //   findCocktails: [Cocktails]
  // }
`;

module.exports = typeDefs;
