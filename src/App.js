import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import AllBeers from "./pages/AllBeers";

import RandomBeers from "./pages/RandomBeers";
import NewBeer from "./pages/NewBeer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeers />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
