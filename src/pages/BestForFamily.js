import React, { useState } from "react";
import CitySearchBar from "../components/CitySearchBar";
import LocationCard from "../components/LocationCard";
import styles from "../sass/home.module.scss";
import city from "../sampleData/Cities.json";
import font from "../sass/createacc.module.scss";
import ViewMapButton from "../images/icons/ViewMapButton.svg";
import FilterMapButton from "../images/icons/FilterMapButton.svg";

const BestForFamily = () => {
  return (
    <div className={styles.wrapper}>
      <CitySearchBar />
      <div className={styles.lightGreenContainer}>
        <div className={font.greenFont}>Best For Families to Live</div>
        <div className={font.smallFont} style={{ fontStyle: "italic" }}>
          Select up to 3.
        </div>
        <div className={styles.mapButtonContainer}>
          <img src={ViewMapButton} alt="" />
          <img src={FilterMapButton} alt="" />
        </div>
      </div>
      <div className={styles.locationCardContainer}>
        {city.map((city) => {
          return <LocationCard city={city} key={city.id} />;
        })}
      </div>
    </div>
  );
};

export default BestForFamily;
