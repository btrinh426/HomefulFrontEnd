import React from "react";
import CitySearchBar from "../components/CitySearchBar";
import LocationCard from "../components/LocationCard";
import styles from "../sass/home.module.scss";
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
        <div className={styles.locationCardContainer}>
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default BestForFamily;
