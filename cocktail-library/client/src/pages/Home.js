import React from "react";
import "../styles/Home.css";
import CocktailSlide from "../components/CocktailSlide";
import { useQuery } from "@apollo/client";
import { FIND_COCKTAILS } from "../utils/queries";

const Home = () => {
  // const { data } = useQuery(FIND_COCKTAILS);
  // const cocktailsData = data?.cocktails || [];
  // console.log(cocktailsData);
  return (
    <>
      <h1>It worked!!</h1>
      <CocktailSlide></CocktailSlide>
    </>
  );
};

export default Home;
