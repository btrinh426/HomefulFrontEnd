import React from "react";
import styles from "../sass/hotspotcarousel.module.scss";

const HotspotCard = ({ hotspot }) => {
  return (
    <div className={styles.card}>
      <img alt="" />
      <p>{hotspot.name}</p>
      <p>{hotspot.type}</p>
    </div>
  );
};

export default HotspotCard;
