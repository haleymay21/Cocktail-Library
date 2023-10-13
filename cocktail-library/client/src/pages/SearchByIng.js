import React from "react";
import IngSearchBar from "../components/IngSearchBar";

import "../styles/SearchByIng.css";

const SearchByIng = () => {
  return (
    <>
      <div className="search-bar-container">
        <IngSearchBar />
        <div>searchResults</div>
      </div>{" "}
    </>
  );
};

export default SearchByIng;
