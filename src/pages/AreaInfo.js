import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
// import Map from "../components/Map";
import WoodbridgePhoto from "../images/WoodbridgeAreaInfo.svg";
import LikeButton from "../images/buttons/LikeButton.svg";
import GradeCard from "../images/GradeCard.svg";
import HotspotCarousel from "../components/HotspotCarousel";
import styles from "../sass/areainfo.module.scss";

const AreaInfo = () => {
  let { id } = useParams();
  const location = useLocation();
  const city = location.state.city;

  const [hotspots, setHotspots] = useState(city.hotspots);
  const [filterHotspots, setFilterHotspots] = useState([]);

  const handlePopularFilter = () => {
    const popular = hotspots.filter(
      (hotspot) => hotspot.filterBy === "popular"
    );
    setHotspots(popular);
    console.log("clicked");
  };
  const handleDiningFilter = () => {
    const dining = hotspots.filter((hotspot) => hotspot.filterBy === "dining");
    setHotspots(dining);
    console.log("clicked");
  };
  const handleNightlifeFilter = () => {
    const nightlife = hotspots.filter(
      (hotspot) => hotspot.filterBy === "nightlife"
    );
    setHotspots(nightlife);
    console.log("clicked");
  };
  const handleParksFilter = () => {
    const parks = hotspots.filter((hotspot) => hotspot.filterBy === "parks");
    setHotspots(parks);
    console.log("clicked");
  };
  const handleCafesFilter = () => {
    const cafes = hotspots.filter((hotspot) => hotspot.filterBy === "cafes");
    setHotspots(cafes);
    console.log("clicked");
  };

  return (
    <>
      <div className={styles.container}>
        <img src={WoodbridgePhoto} alt="woodbridge" />
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <div className={styles.titleFont}>{city.name}</div>
            <img src={LikeButton} alt="button" />
          </div>
          <div className={styles.subTitleFont}>Neighborhood in Irvine, CA</div>
          <div className={styles.reviewContainer}>
            <Rating color="black" size="small" value={city.stars} readOnly />
            <div
              className={styles.reviewFont}
            >{`${city.numOfReviews} reviews`}</div>
          </div>
          <div
            className={styles.greenFont}
          >{`${city.rank} best places for families to live in orange county`}</div>
        </div>
        <img src={GradeCard} alt="gradeCard" />
        {/* <Map /> */}
        <div>What's Around {city.name}</div>
        <div>Explore the area and discover nearby hotspots</div>
        <div className={styles.filter}>
          <div onClick={handlePopularFilter}>Popular</div>
          <div onClick={handleDiningFilter}>Dining</div>
          <div onClick={handleNightlifeFilter}>Nightlife</div>
          <div onClick={handleParksFilter}>Parks</div>
          <div onClick={handleCafesFilter}>Cafes</div>
        </div>
        <div className={styles.carousel}>
          <HotspotCarousel cityHotspot={hotspots} />
        </div>
      </div>
    </>
  );
};

export default AreaInfo;
