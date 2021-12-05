import React, { useState } from "react";
import StateCard from "./StateCard";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Input } from "@mui/material";

function Home({ stateData }) {
  const [drawerOpen, setDrawerOpen] = useState(null);
  const open = Boolean(drawerOpen);
  const [search, setSearch] = useState("");
  const [searchParam] = useState("state");

  let stateList = stateData.map((item) => {
    return <StateCard key={item.fips} item={item} />;
  });

  console.log(stateData);

  const handleClick = (event) => {
    setDrawerOpen(event.currentTarget);
  };
  const handleClose = () => {
    setDrawerOpen(null);
  };

  const handleOmicron = () => {
    window.open("https://www.who.int/news/item/28-11-2021-update-on-omicron");
  };

  const handleDelta = () => {
    window.open(
      "https://www.cdc.gov/coronavirus/2019-ncov/variants/delta-variant.html"
    );
  };

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();

    let result = [];

    result = stateData.filter((stateName) => {
      return stateName.state.search(value) != -1;
    });
  };

  return (
    <div className="home">
      <div>
        <h2 className="header">COVID TRACKER</h2>
        <h3>Current Case and Death Totals By State:</h3>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Covid Alerts
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={drawerOpen}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleOmicron}>Omicron</MenuItem>
          <MenuItem onClick={handleDelta}>Delta</MenuItem>
        </Menu>
      </div>
      <div className="search-wrapper">
        <label>Search: </label>
        <Input
          type="search"
          className="search-form"
          value={handleSearch}
          placeholder="Search..."
          onChange={(e) => e.target.value}
        />
      </div>
      <ul className="card-list">{stateList}</ul>
    </div>
  );
}

export default Home;
