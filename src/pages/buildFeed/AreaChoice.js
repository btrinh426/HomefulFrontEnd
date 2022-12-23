import React, { useState, useEffect } from "react";
import Locations from "./Locations.json";
import styles from "../../sass/createacc.module.scss";

const AreaChoice = ({
  setOnAreaChoiceContent,
  setOnIdealAreaTab,
  setOnIdealAreaContent,
}) => {
  const [search, setSearch] = useState("");

  const handleNext = () => {
    setOnAreaChoiceContent(false);
    setOnIdealAreaTab(true);
    setOnIdealAreaContent(true);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  useEffect(() => {});

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City, State, Zip Code"
          onChange={handleSearchChange}
          value={search}
        />
        <div>
          {Locations.map((location, key) => {
            return (
              <div key={location.zipCode}>
                {location.city}, {location.state}
              </div>
            );
          })}
        </div>
      </form>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default AreaChoice;
