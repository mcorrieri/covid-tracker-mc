import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import UsChart from "./components/UsChart";
import NotFound from "./components/NotFound";
import StateChart from "./components/StateChart";

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [usData, setUsData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchUStotal();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/nyt/states?lastdays=2"
    )
      .then((response) => response.json())
      .then((data) => setCurrentData(data));
  }
  // console.log(currentData);

  async function fetchUStotal() {
    const response = await fetch("https://disease.sh/v3/covid-19/nyt/usa")
      .then((response) => response.json())
      .then((data) => setUsData(data));
  }
  // console.log(usData);

  //add a sidebar, maybe have a list of variants including name, info, first found, link to resources, 
  //location setting? google maps to find nearest location for vaccine?

  return (
    <div className="App">
      <Routes>
        <Route exact path="/welcome" element={<Splash />}></Route>
        <Route
          exact
          path="/uschart"
          element={<UsChart usData={usData} />}
        ></Route>
        <Route exact path="/:id/state" element={<StateChart />}></Route>
        <Route
          exact
          path="/"
          element={<Home currentData={currentData} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
