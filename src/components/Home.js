import React from "react";
import StateCard from "./StateCard";

function Home({ currentData }) {
  let stateList = currentData.map((item) => {
    return <StateCard key={item.fips} item={item} />;
  });

  console.log(stateList);

  return (
    <div className="home">
      <h2 className="header">COVID TRACKER</h2>
      <h3>Current Case and Death Totals:</h3>
      <ul className="card-list">{stateList}</ul>
    </div>
  );
}

export default Home;
