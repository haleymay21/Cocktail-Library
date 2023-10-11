import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchByName.css";
import { useQuery } from "@apollo/client";

import { FIND_COCKTAILS_NAME } from "../utils/queries";

const NameSearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([]); // Define filteredResults in state

  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useQuery(FIND_COCKTAILS_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cocktailNames = data.cocktails.map((cocktail) => cocktail.name);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the cocktail names based on the search term
    const filteredResults = cocktailNames.filter((name) =>
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
          placeholder="Search by Cocktail Name"
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

export default NameSearchBar;
