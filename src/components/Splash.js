import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="splash">
      <h1 className="splash-header">Welcome to COVID-Tracker</h1>
      <Link to="/">
        <Button variant="contained">Enter</Button>
      </Link>
      <p>Check out the github</p>
    </div>
  );
}

export default Splash;
