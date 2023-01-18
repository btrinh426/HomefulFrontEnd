import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
import Map from "../components/Map";
import WoodbridgePhoto from "../images/WoodbridgeAreaInfo.svg";
import LikeButton from "../images/buttons/LikeButton.svg";
import GradeCard from "../images/GradeCard.svg";
import styles from "../sass/areainfo.module.scss";

const AreaInfo = () => {
  let { id } = useParams();
  const location = useLocation();
  const city = location.state.city;

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
        <Map />
        <div>What's Around {city.name}</div>
        <div>Explore the area and discover nearby hotspots</div>
      </div>
    </>
  );
};

export default AreaInfo;
