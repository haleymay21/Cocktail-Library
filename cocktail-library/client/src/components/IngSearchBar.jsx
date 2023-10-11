import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchByIng.css";
import { useQuery } from "@apollo/client";
import Select from "react-select"; // Import react-select


import { FIND_ING_AND_LIQ_NAME } from "../utils/queries";

const IngSearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([]); // Define filteredResults in state
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data } = useQuery(FIND_ING_AND_LIQ_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const ingredientNames = data.ingredients.map((ingredient) => ingredient.name);
  const liquorNames = data.liquor.map((liquor) => liquor.name);


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the ingredient names based on the search term
    const filteredResults =  [...ingredientNames, ...liquorNames].filter((name) =>
      name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResults(filteredResults); // Update the state with filtered results
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search by Ingredient Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Conditional rendering of the <ul> */}
        {filteredResults.length > 0 && (
          <ul>
            {filteredResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default IngSearchBar;
