import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

function App() {
  const [currentData, setCurrentData] = useState([]);

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

  return (
    <div className="App">
      <Routes>
        <Route exact path="/welcome" element={<Splash />}></Route>
        <Route
          exact
          path="/"
          element={<Home currentData={currentData} />}
        ></Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
