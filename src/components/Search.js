import React from "react";
import Input from "@mui/material/Input";

const Search = () => {
  return (
    <div className="search-container">
      <form>
        <Input type="text" placeholder="Search States..." />
      </form>
    </div>
  );
};

export default Search;
