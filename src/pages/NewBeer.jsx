import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function NewBeer() {
  const [name, setName] = useState(" ");
  const [tagline, setTagline] = useState(" ");

  const [description, setDscription] = useState(" ");

  const [firsBrewed, SetFirsBrewed] = useState(" ");

  const [brewersTips, setBrewerTips] = useState(" ");

  const [attenuationLevel, setAttenuationLevel] = useState(" ");

  const [contributedBy, setContributedBy] = useState(" ");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleTaglineChange = (e) => setTagline(e.target.value);
  const handleDescriptionChange = (e) => setDscription(e.target.value);
  const handleFirsBrewedChange = (e) => SetFirsBrewed(e.target.value);
  const handleBrewersTipsChange = (e) => setBrewerTips(e.target.value);
  const handleAttenuationLevelChange = (e) =>
    setAttenuationLevel(e.target.value);
  const handleContributedByChange = (e) =>
    handleContributedByChange(e.target.value);

  const handleSubmit = async (e) => {
    try {
      const newBeer = {
        name,
        tagline,
        description,
        firsBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      };

      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <NavBar />
      <label htmlFor="name">name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <br />
      <br />
      <label htmlFor="tagline">tagline:</label>
      <input
        type="text"
        name="tagline"
        value={tagline}
        onChange={handleTaglineChange}
      />
      <br />
      <br />
      <label htmlFor="description">description:</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />
      <br />
      <label htmlFor="firsBrewed">firs Brewed:</label>
      <input
        type="text"
        name="firsBrewed"
        value={firsBrewed}
        onChange={handleFirsBrewedChange}
      />
      <br />
      <br />
      <label htmlFor="brewersTips">brewers Tips:</label>
      <input
        type="text"
        name="brewersTips"
        value={brewersTips}
        onChange={handleBrewersTipsChange}
      />
      <br />
      <br />
      <label htmlFor="attenuationLevel">Attenuation Level:</label>
      <input
        type="number"
        name="attenuationLevel"
        value={attenuationLevel}
        onChange={handleAttenuationLevelChange}
      />
      <br />
      <br />
      <label htmlFor="contributedBy">Contribute dBy:</label>
      <input
        type="text"
        name="contributedBy"
        value={contributedBy}
        onChange={handleContributedByChange}
      />
      <button onClick={handleSubmit}>Añadir</button>
    </div>
  );
}

export default NewBeer;
