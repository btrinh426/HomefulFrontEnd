import React from "react";
import styles from "../sass/hotspotcarousel.module.scss";

const HotspotCard = ({ hotspot }) => {
  return (
    <div className={styles.card}>
      <img src={hotspot.image} alt="" />
      <p>{hotspot.name}</p>
      <p>{hotspot.type}</p>
    </div>
  );
};

export default HotspotCard;
