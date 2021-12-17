import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import UsChart from "./components/UsChart";
import NotFound from "./components/NotFound";
import StateChart from "./components/StateChart";
import Search from "./components/Search";

function App() {
  const [stateData, setStateData] = useState([]);
  const [usData, setUsData] = useState([]);
  let { state } = useParams();

  useEffect(() => {
    fetchStateData();
    fetchUStotal();
  }, []);

  async function fetchStateData() {
    await fetch("https://disease.sh/v3/covid-19/nyt/states?lastdays=2")
      .then((response) => response.json())
      .then((data) => setStateData(data));
  }
  console.log("Statedata:", stateData);

  async function fetchUStotal() {
    await fetch("https://disease.sh/v3/covid-19/nyt/usa")
      .then((response) => response.json())
      .then((data) => setUsData(data));
  }
  // console.log(usData);

  //add a sidebar, maybe have a list of variants including name, info, first found, link to resources,
  //location setting? google maps to find nearest location for vaccine?

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />}></Route>
        <Route
          exact
          path="/uschart"
          element={<UsChart usData={usData} />}
        ></Route>
        <Route
          exact
          path=":state"
          element={<StateChart stateData={stateData} />}
        ></Route>
        <Route
          exact
          path="/home"
          element={[<Search />, <Home stateData={stateData} />]}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
