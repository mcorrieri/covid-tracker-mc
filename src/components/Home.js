import React, { useState } from "react";
import StateCard from "./StateCard";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Home({ stateData, usData, searchTerm }) {
  const [drawerOpen, setDrawerOpen] = useState(null);
  const open = Boolean(drawerOpen);
  const mostRecentDate = usData.at(-1);

  let stateList = stateData.map((item, index) => {
    return <StateCard key={index} item={item} />;
  });

  const results = stateData.filter((state) => {
    return state.state.toLowerCase().includes(searchTerm);
  });

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
        <h3>
          Date: {mostRecentDate.date}
          <br></br> US Cases: {mostRecentDate.cases.toLocaleString()} <br></br>{" "}
          Deaths: {mostRecentDate.deaths.toLocaleString()}
        </h3>
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
      {console.log("RESULTS", results)}
    </div>
  );
}

export default Home;
