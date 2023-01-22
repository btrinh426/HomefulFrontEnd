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
  const hotspots = city.hotspots;

  const [filterHotspots, setFilterHotspots] = useState(city.hotspots);

  const handleFilterClick = (e) => {
    switch (e.target.id) {
      case "popular":
        const popular = hotspots.filter(
          (hotspot) => hotspot.filterBy === "popular"
        );
        setFilterHotspots(popular);
        break;
      case "dining":
        const dining = hotspots.filter(
          (hotspot) => hotspot.filterBy === "dining"
        );
        setFilterHotspots(dining);
        break;
      case "nightlife":
        const nightlife = hotspots.filter(
          (hotspot) => hotspot.filterBy === "nightlife"
        );
        setFilterHotspots(nightlife);
        break;
      case "parks":
        const parks = hotspots.filter(
          (hotspot) => hotspot.filterBy === "parks"
        );
        setFilterHotspots(parks);
        break;
      case "cafes":
        const cafes = hotspots.filter(
          (hotspot) => hotspot.filterBy === "cafes"
        );
        setFilterHotspots(cafes);
        break;
      default:
        return;
    }
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
          <div id="popular" onClick={handleFilterClick}>
            Popular
          </div>
          <div id="dining" onClick={handleFilterClick}>
            Dining
          </div>
          <div id="nightlife" onClick={handleFilterClick}>
            Nightlife
          </div>
          <div id="parks" onClick={handleFilterClick}>
            Parks
          </div>
          <div id="cafes" onClick={handleFilterClick}>
            Cafes
          </div>
        </div>
        <div className={styles.carousel}>
          <HotspotCarousel cityHotspot={filterHotspots} />
        </div>
      </div>
    </>
  );
};

export default AreaInfo;
