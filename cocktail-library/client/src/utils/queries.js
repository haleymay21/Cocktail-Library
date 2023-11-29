import { gql } from "@apollo/client";

export const FIND_COCKTAILS = gql`
  {
    cocktails {
      _id
      name
      created
      build
      glassIce
      garnish
      lowABV
      recipe
    }
  }
`;

export const GET_COCKTAIL = gql`
 query getCocktail($name: String!) {
  cocktail(name: $name) {
      _id
      name
      created
      build
      glassIce
      garnish
      lowABV
      recipe
    }
  }
`;


export const FIND_COCKTAILS_NAME = gql`
  {
    cocktails {
      name
    }
  }
`;

export const FIND_ING_AND_LIQ_NAME = gql`
  {
    ingredients {
      name
    }
    liquor {
      name
    }
  }
`;
