import React from "react";
import styles from "../sass/home.module.scss";
import HeroImage from "../images/hero_image.svg";
import BestForFamily from "../images/BestForFamily.svg";
import PetFriendly from "../images/PetFriendly.svg";
import YoungPros from "../images/YoungPros.svg";
import HealthOutdoors from "../images/HealthOutdoors.svg";
import SeeNeighborhoods from "../images/SeeNeighborhoods.svg";
import GetPrepared from "../images/GetPrepared.svg";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <img src={HeroImage} alt="" />
      <div className={styles.tanContainer}>
        EXPLORE PLACES THAT WOULD MAKE YOU HAPPY
      </div>
      <div className={styles.subContainer}>
        <div className={styles.padding}>
          <div className={styles.subTitle}>Made for You</div>
          <div className={styles.subText}>
            Get your search going on the right <br /> path with a curated
            Discover Feed <br />
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              made just for you
            </span>
          </div>
        </div>
      </div>
      <button className={styles.button1}>Get Started</button>
      <div className={styles.subContainer}>
        <div className={styles.padding}>
          <div className={styles.subTitle}>Explore top topics</div>
          <i>Based on current location</i>
        </div>
      </div>
      <div>
        <img src={BestForFamily} alt="" />
      </div>
      <div>
        <img src={PetFriendly} alt="" />
      </div>
      <div>
        <img src={YoungPros} alt="" />
      </div>
      <div>
        <img src={HealthOutdoors} alt="" />
      </div>
      <div className={styles.invertContainer}>
        <div>
          <img src={SeeNeighborhoods} alt="" />
        </div>
        <div className={styles.invertSubtitle}>See Neighborhoods</div>
        <div className={styles.invertFont}>
          Gather the information you need
          <br />
          with the numerous neighborhood
          <br /> insights available
        </div>
        <button className={styles.button2}>Learn More</button>
      </div>
      <div className={styles.subContainer2}>
        <div className={styles.subTitle}>Get Prepared</div>
        <div className={styles.subTextBold}>
          Everything you need to know
          <br />
          for a succesful move.
        </div>
        <div className={styles.subTextBold}>
          Whether you are a homebuyer, renter, or
          <br />
          moving for the first time or from another
          <br />
          country, we have all the tips and guides
          <br />
          from experts to prepare you for your life-
          <br />
          changing move
        </div>
        <div className={styles.subTextBold}>
          <img src={GetPrepared} alt="" />
        </div>
        <button className={styles.button1}>Tips & Guides</button>
      </div>
      <div>
        Discover new neighborhoods and get all the information you need for your
        big move.
      </div>
      <br />
      <br />
      <div>
        We have hope that you'll be happy with the new place you'll call home.
      </div>
    </div>
  );
};

export default Home;
