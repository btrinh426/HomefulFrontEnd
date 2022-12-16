import React from "react";
import styles from "../../sass/createacc.module.scss";

const Position = () => {
  return (
    <>
        <div className={styles.blackFont20}>Which best fits your current position?</div>
        <div className={styles.italic}><i>Select all that apply.</i></div>
        <div className={styles.buttonContainer}>
            <button>LOOKING TO BUY</button>
            <button>LOOKING TO RENT</button>                    
            <button>FIRST TIME MOVING</button>
            <button>MOVING ABROAD</button>
            <button>CURRENT RESIDENT, NOT MOVING</button>
            <div>Skip for now</div>
            <button>Next</button>
        </div>
    </>
  );
};

export default Position;
