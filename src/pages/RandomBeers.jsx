import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function RandomBeers() {
  //!------------ESTADO---------------

  const [random, setRandom] = useState(null);

  const navigate = useNavigate();
  //!------------USEEFECT 1º---------------
  useEffect(() => {
    getRandomBeer();
  }, []);
  //!------------FUNCION GETALBBEERS---------------
  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );

      console.log(response.data);
      setRandom(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  //!------------LOADING---------------
  if (random === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <NavBar />

      <div>
        <img src={random.image_url} alt="" srcset="" width={"50px"} />
        <h4>{random.name}</h4>
        <p>{random.attenuation_level}</p>
        <p>{random.tagline}</p>
        <p>{random.description}</p>
        <p>{random.first_brewed}</p>
        <strong>{random.contributed_by}</strong>
      </div>
    </div>
  );
}

export default RandomBeers;
