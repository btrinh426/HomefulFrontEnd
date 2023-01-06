import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gradeImg from "../images/icons/gradeImg.svg";
import LikeButton from "../images/buttons/LikeButton.svg";
import { Rating } from "@mui/material";
import styles from "../sass/locationcard.module.scss";

const LocationCard = ({ city, id }) => {
  const [liked, setLiked] = useState(true);

  const handleReview = () => {
    console.log("clicked review");
  };

  const navigate = useNavigate();

  const handleLocationCard = (id) => {
    navigate(`/areainfo/${id}`);
  };

  const handleLike = async () => {
    const isLiked = await setLiked(!liked);
    if (liked) {
      console.log("liked");
    } else {
      console.log("unliked");
    }
    return isLiked;
  };

  return (
    <div
      className={styles.locationCardContainer}
      onClick={() => {
        handleLocationCard(id);
      }}
    >
      <div className={styles.locationCard}>
        <div className={styles.titleContainer}>
          <div className={styles.bigFont}>{city.name}</div>
          <div className={styles.medFont}>{city.subTitle}</div>
          <div className={styles.greenFont}>{city.rank}</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {city.user}: {city.content}
          </div>
          <div className={styles.gradeContainer}>
            <div className={styles.gradeContent}>
              <img src={gradeImg} alt="grade" />
              <div>
                OVERALL <br />
                GRADE
              </div>
            </div>
            <div className={styles.gradeContent}>
              <img src={gradeImg} alt="grade" />
              <div>
                FAMILY-
                <br />
                FRIENDLY
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <Rating color="black" size="small" value={city.stars} readOnly />
            <div className={styles.medFont} onClick={handleReview}>
              <u>Read {city.numOfReviews} reviews</u>
            </div>
            <img
              className={styles.likeButton}
              src={LikeButton}
              alt="like button"
              onClick={handleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
