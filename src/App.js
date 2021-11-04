import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/welcome" element={<Splash />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
