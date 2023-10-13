import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchByName.css";
import { useQuery } from "@apollo/client";
import client from "../App"
import { FIND_COCKTAILS_NAME } from "../utils/queries";
import { GET_COCKTAIL } from "../utils/queries"; // Replace with the actual query

const NameSearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([]); // Define filteredResults in state
  const [searchTerm, setSearchTerm] = useState("");
  const { loading: loadingQuery1, error: errorQuery1, data: dataQuery1 } = useQuery(FIND_COCKTAILS_NAME);
  const { loading: loadingQuery2, error: errorQuery2, data: dataQuery2 } = useQuery(GET_COCKTAIL);

  if (loadingQuery1 || loadingQuery2) {
    return <p>Loading...</p>;
  }

  if (errorQuery1 || errorQuery2) {
    return (
      <>
        {errorQuery1 && <p>Error in Query 1: {errorQuery1.message}</p>}
        {errorQuery2 && <p>Error in Query 2: {errorQuery2.message}</p>}
      </>
    );
  }

  const cocktailNames = dataQuery1.cocktails.map((cocktail) => cocktail.name);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the cocktail names based on the search term
    const filteredResults = cocktailNames.filter((name) =>
      name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResults(filteredResults); // Update the state with filtered results
  };

  const handleSelect = (selectedOption) => {
    setSearchTerm(selectedOption);
    setFilteredResults([]); // Clear the autocomplete list
  };

  const handleRetrieveCocktail = async () => {
    const { data } = await client.query({
      query: GET_COCKTAIL, // Your GraphQL query for retrieving a specific cocktail
      variables: { name: searchTerm }, // Pass the selected cocktail name as a variable
    });

    // Handle the retrieved data (e.g., log it to the console)
    console.log("Cocktail data:", data);
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search by Cocktail Name"
          value={searchTerm}
          onChange={handleSearch}
        />{" "}
        <Button onClick={handleRetrieveCocktail}><FaSearch id="search-icon" /></Button>
        {/* Conditional rendering of the <ul> */}
        {filteredResults.length > 0 && (
          <ul>
            {filteredResults.map((result, index) => (
              <li
                key={index}
                onClick={() => handleSelect(result)} // Add click handler to set the selected option
              >
                <Button>{result}</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NameSearchBar;
