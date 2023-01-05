import React from "react";
import gradeImg from "../images/icons/gradeImg.svg";
import styles from "../sass/locationcard.module.scss";

const LocationCard = () => {
  return (
    <div className={styles.locationCard}>
      <div className={styles.titleContainer}>
        <div className={styles.bigFont}>Westpark</div>
        <div className={styles.medFont}>Neighborhood in Irvine, CA</div>
        <div className={styles.greenFont}>#1 FOR FAMILIES</div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <span>Parent:</span> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque
          habitant.
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
      </div>
    </div>
  );
};

export default LocationCard;
