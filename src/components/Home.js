import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Home() {
  const [current, setCurrent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoxes();
  }, []);

  async function fetchFoxes() {
    const response = await fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => setCurrent(data));
  }

  return (
    <div className="home">
      <h2 className="header">COVID TRACKER</h2>
      <p>HOME</p>
      <img src={current.image} alt="fox" />
      <br></br>
      <Button onClick={fetchFoxes} variant="outlined">
        Get a new fox!
      </Button>
    </div>
  );
}

export default Home;
