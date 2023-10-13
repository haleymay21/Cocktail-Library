import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchByIng.css";
import { useQuery } from "@apollo/client";
import Select from "react-select"; // Import react-select

import { FIND_ING_AND_LIQ_NAME } from "../utils/queries";

const IngSearchBar = () => {
  const [selectedValues, setSelectedValues] = useState([]); // Store selected values in state
  const { loading, error, data } = useQuery(FIND_ING_AND_LIQ_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const ingredientOptions = data.ingredients.map((ingredient) => ({
    value: ingredient.name,
    label: ingredient.name,
  }));
  const liquorOptions = data.liquor.map((liquor) => ({
    value: liquor.name,
    label: liquor.name,
  }));

  const handleChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <Select
          isMulti
          options={[...ingredientOptions, ...liquorOptions]}
          value={selectedValues}
          onChange={handleChange}
          placeholder="Search by Ingredients or Liquor Name"
        />
           {/* Display selected values */}
           {/* <div>
          {selectedValues.map((option) => (
            <span key={option.value}>{option.label}</span>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default IngSearchBar;
