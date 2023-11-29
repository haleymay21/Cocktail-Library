import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchByName.css";
import { useQuery, useLazyQuery } from "@apollo/client";

import { FIND_COCKTAILS_NAME } from "../utils/queries";
import { GET_COCKTAIL } from "../utils/queries";

const NameSearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktailResults, setCocktailResults] = useState();
  const { loading, error, data } = useQuery(FIND_COCKTAILS_NAME);
  const [getCocktail, { loadingSearch, errorSearch, data: dataSearch }] =
    useLazyQuery(GET_COCKTAIL);

  // useEffect(() => {
  //   console.log("Cocktail data:", dataSearch);
  // }, [dataSearch]);

  if (loading || loadingSearch) return <p>Loading...</p>;
  if (error || errorSearch) return <p>Error: {error.message}</p>;

  const cocktailNames = data.cocktails.map((cocktail) => cocktail.name);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = cocktailNames.filter((name) =>
      name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResults(filteredResults);
  };

  const handleSelect = (selectedOption) => {
    setSearchTerm(selectedOption);
    setFilteredResults([]); // Clear the autocomplete list
  };
  console.log(searchTerm);

  const handleRetrieveCocktail = async () => {
    const res = await getCocktail({ variables: { name: searchTerm } });

    console.log("12", res.data);
    setCocktailResults(res.data);
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
        <Button onClick={handleRetrieveCocktail}>
          <FaSearch id="search-icon" />
        </Button>
        
        {filteredResults.length > 0 && (
          <ul>
            {filteredResults.map((result, index) => (
              <li
                key={index}
                onClick={() => handleSelect(result)} // Add click handler to set the selected option
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>{cocktailResults && (
        <h1>{cocktailResults.cocktail.name}</h1>
      )}</div>
    </>
  );
};

export default NameSearchBar;
