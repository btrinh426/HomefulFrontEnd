import React, { useState, useEffect } from "react";
import Locations from "../pages/buildFeed/Locations.json";
import styles from "../sass/createacc.module.scss";

const CitySearchBar = () => {
  const [search, setSearch] = useState("");
  const [filterResults, setFilterResults] = useState([]);

  const handleSearchChange = (e) => {
    const results = Locations.filter((cities) => {
      if (e.target.value === "") {
        return cities;
      } else {
        return cities.city.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    setFilterResults(results);
    setSearch(e.target.value);
  };

  const handleCityClick = (e) => {
    console.log(filterResults);
    console.log(e.target.id);
    const city = filterResults.filter((data) => {
      return data.zipCode.toString() === e.target.id;
    });
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className={styles.blackFont20}>Where are you looking to move?</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City, State, Zip Code"
          onChange={handleSearchChange}
          value={search}
        />
        <div>
          {search === ""
            ? ""
            : filterResults.map((cities) => {
                return (
                  <div
                    key={cities.zipCode}
                    id={cities.zipCode}
                    onClick={handleCityClick}
                  >
                    {cities.city}, {cities.state}
                  </div>
                );
              })}
        </div>
      </form>
    </>
  );
};

export default CitySearchBar;
