import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Home() {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // async function fetchFoxes() {
  //   const response = await fetch("https://randomfox.ca/floof/")
  //     .then((res) => res.json())
  //     .then((data) => setCurrentData(data));
  // }

  async function fetchData() {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/nyt/states?lastdays=1"
    )
      .then((res) => res.json())
      .then((data) => setCurrentData(data));
  }
  console.log(currentData);

  const countryList = currentData.map((item) => item.state);

  console.log(countryList);

  return (
    <div className="home">
      <h2 className="header">COVID TRACKER</h2>
      <p>HOME</p>
      <ul>
        <li>{countryList}</li>
      </ul>
      <br></br>
      <Button onClick={fetchData} variant="outlined">
        Get a new fox!
      </Button>
    </div>
  );
}

export default Home;
