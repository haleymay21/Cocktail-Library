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
