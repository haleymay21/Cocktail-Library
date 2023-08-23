import React from "react";
import { Card } from "react-bootstrap";
import "../styles/CocktailSlide.css";
import { useQuery } from "@apollo/client";
import { FIND_COCKTAILS } from "../utils/queries";

const CocktailSlide = () => {
  const { data } = useQuery(FIND_COCKTAILS);
  const cocktailsData = data?.cocktails || [];
  console.log(cocktailsData);

  // shuffle data into new array called newList //
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(cocktailsData);
  console.log(newList);

  
  return (
    <>
      <section aria-label="cocktail-slide">
        <div className="carousel">
          <button className="carousel-button prev">&#8678;</button>
          <button className="carousel-button next">&#8680;</button>
          <ul>
            {newList.map((cocktailsData) => { 
               const i = newList.indexOf(cocktailsData)
              return (
                <li className={`slide index`+i}>
                  <Card>
                    <div className="card-body">
                      <h5 className="card-title">{cocktailsData.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {i}
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CocktailSlide;
