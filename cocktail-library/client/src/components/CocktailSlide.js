import React from "react";
import { Card } from "react-bootstrap";
import "../styles/CocktailSlide.css";
import { useQuery } from "@apollo/client";
import { FIND_COCKTAILS } from "../utils/queries";

const CocktailSlide = () => {
  const { data } = useQuery(FIND_COCKTAILS);
  const cocktailsData = data?.cocktails || [];
  console.log(cocktailsData);
  return (
    <>
      {cocktailsData.map((cocktailsData) => {
        return (
          <Card>
            <div className="card-body">
              <h5 className="card-title">{cocktailsData.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default CocktailSlide;
