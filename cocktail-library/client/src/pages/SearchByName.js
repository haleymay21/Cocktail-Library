import React from "react";
import NameSearchBar from "../components/NameSearchBar";
import "../styles/SearchByName.css";

const SearchByName = () => {
  return (
    <>
      <div className="search-bar-container">
        <NameSearchBar />
        <div>searchResults</div>
      </div>
    </>
  );
};

export default SearchByName;
