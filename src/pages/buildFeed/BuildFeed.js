import React from "react";
import Position from "./Position"
import AreaChoice from "./AreaChoice";
import IdealArea from "./IdealArea";
import styles from "../../sass/createacc.module.scss";

const BuildFeed = () => {
    return (
        <div className={styles.container}>
            <div className={styles.greenFont}>Build Your Discover Feed</div>
            <div className={styles.disContainer}>
                <div className={styles.statusContainer}>
                    <div className={styles.blackFont}>POSITION</div>
                    <div className={styles.greenLine} />
                </div>
                <div className={styles.statusContainer}>
                    <div className={styles.blackFont}>AREA CHOICE</div>
                    <div className={styles.greenLine} />
                </div>
                <div className={styles.statusContainer}>
                    <div className={styles.greyFont}>IDEAL AREA</div>
                    <div className={styles.greyLine} />
                </div>
            </div>
            <div className={styles.whiteContainer}>
                <Position />
            </div>
        </div>
      );
};

export default BuildFeed;
