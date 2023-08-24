import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/CocktailSlide.css";
import { useQuery } from "@apollo/client";
import { FIND_COCKTAILS } from "../utils/queries";

const CocktailSlide = () => {
  const { data } = useQuery(FIND_COCKTAILS);
  const cocktailsData = data?.cocktails || [];
  console.log(cocktailsData);

  // shuffle data into new array called cocktailsShuffled //
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const cocktailsShuffled = shuffle(cocktailsData);
  console.log(cocktailsShuffled);

  // uses buttons to create carousel //
  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      // converts slides to array, uses index to move carousel back and forth //
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

  return (
    <>
      <section aria-label="cocktail-slide">
        <div className="carousel" data-carousel>
          <Button className="carousel-button next" data-carousel-button="next">
            &#8680;
          </Button>
          <Button className="carousel-button prev" data-carousel-button="prev">
            &#8678;
          </Button>

          <ul data-slides>
            {cocktailsShuffled.map((cocktailsData) => {
              const cocktailIndex = cocktailsShuffled.indexOf(cocktailsData);
              return cocktailsShuffled.length - 1 === cocktailIndex ? (
                <li className="slide" data-active>
                  <Card>
                    <div className="card-body">
                      <h5 className="card-title">{cocktailsData.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {cocktailIndex}
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </Card>
                </li>
              ) : (
                <li className="slide">
                  <Card>
                    <div className="card-body">
                      <h5 className="card-title">{cocktailsData.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {cocktailIndex}
                      </h6>
                      <p className="card-text">
                        this one is the else statement
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
