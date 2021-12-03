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

  return (
    <div className="home">
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Covid Variants
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
          <MenuItem onClick={handleClose}>Omicron</MenuItem>
          <MenuItem onClick={handleClose}>Delta</MenuItem>
        </Menu>
      </div>
      <h2 className="header">COVID TRACKER</h2>
      <h3>Current Case and Death Totals By State:</h3>
      <ul className="card-list">{stateList}</ul>
    </div>
  );
}

export default Home;
