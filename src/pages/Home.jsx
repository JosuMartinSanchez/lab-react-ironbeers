import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>
        <Link to={"/beers"}>All Beers</Link>
      </h2>
      <h2>
        <Link to={"/random-beer"}>Random Beers</Link>
      </h2>
      <h2>
        <Link to={"/new-beer"}> New Beer</Link>
      </h2>
    </div>
  );
}

export default Home;
