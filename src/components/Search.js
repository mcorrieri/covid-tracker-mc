import React from "react";
import Input from "@mui/material/Input";

const Search = ({ searchTerm, setSearchTerm, stateData, setStateData }) => {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-container">
      <form>
        <Input
          value={searchTerm}
          onChange={handleChange}
          type="text"
          placeholder="Search States..."
        />
      </form>
    </div>
  );
};

export default Search;
