import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="splash">
      <h1 className="splash-header">Welcome to COVID-Tracker</h1>
      <Link to="/">
        <Button color="primary" variant="contained">
          Enter
        </Button>
      </Link>
      <br></br>
      <a
        className="github-link"
        href="https://github.com/mcorrieri/covid-tracker-mc"
      >
        Check out the github
      </a>
    </div>
  );
}

export default Splash;
