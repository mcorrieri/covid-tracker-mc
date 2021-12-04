import React, { useState } from "react";
import StateCard from "./StateCard";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Home({ currentData }) {
  const [drawerOpen, setDrawerOpen] = useState(null);
  const open = Boolean(drawerOpen);

  let stateList = currentData.map((item) => {
    return <StateCard key={item.fips} item={item} />;
  });

  console.log(currentData);

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
      <ul className="card-list">{stateList}</ul>
    </div>
  );
}

export default Home;
