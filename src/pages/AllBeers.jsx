import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function AllBeers() {
  //!------------ESTADO---------------

  const [beerList, setBeerList] = useState(null);

  const navigate = useNavigate();
  //!------------USEEFECT 1º---------------
  useEffect(() => {
    getAllBeers();
  }, []);
  //!------------FUNCION GETALBBEERS---------------
  const getAllBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeerList(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  //!------------LOADING---------------
  if (beerList === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <NavBar />
      {beerList.map((eachBeer) => {
        return (
          <div>
            <img src={eachBeer.image_url} alt="" srcset="" width={"50px"} />
            <h4>{eachBeer.name}</h4>
            <p>{eachBeer.tagline}</p>
            <strong>{eachBeer.contributed_by}</strong>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
