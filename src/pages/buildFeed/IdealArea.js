import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "../../sass/createacc.module.scss";

const IdealArea = ({
  setOnAreaChoiceTab,
  setOnPositionContent,
  setOnAreaChoiceContent,
  setIdealAreaChoices,
  idealAreaChoices,
}) => {
  const handleNext = () => {
    setOnAreaChoiceTab(true);
    setOnPositionContent(false);
    setOnAreaChoiceContent(true);
  };

  const handleFormat = (event, newFormats) => {
    setIdealAreaChoices(newFormats);
  };

  return (
    <>
      <div className={styles.blackFont20}>
        What do you look for in an ideal area to live?
      </div>
      <div className={styles.italic}>
        <i>Select up to 3</i>
      </div>
      <ToggleButtonGroup
        className={styles.buttonContainer}
        value={idealAreaChoices}
        onChange={handleFormat}
      >
        <ToggleButton value="safety">
          <button className={styles.selectedButton}>SAFETY</button>
        </ToggleButton>
        <ToggleButton value="kidFriendly">
          <button className={styles.selectedButton}>KID-FRIENDLY</button>
        </ToggleButton>
        <ToggleButton value="jobOpportunites">
          <button className={styles.selectedButton}>JOB OPPORTUNITIES</button>
        </ToggleButton>
        <ToggleButton value="petFriendly">
          <button className={styles.selectedButton}>PET-FRIENDLY</button>
        </ToggleButton>
        <ToggleButton value="affordability">
          <button className={styles.selectedButton}>AFFORDABILITY</button>
        </ToggleButton>
        <ToggleButton value="easyCommute">
          <button className={styles.selectedButton}>EASY COMMUTE</button>
        </ToggleButton>
        <ToggleButton value="outdoorActivites">
          <button className={styles.selectedButton}>OUTDOOR ACTIVITIES</button>
        </ToggleButton>
        <ToggleButton value="goodSchools">
          <button className={styles.selectedButton}>GOOD SCHOOLS</button>
        </ToggleButton>
        <ToggleButton value="qualityOfLife">
          <button className={styles.selectedButton}>QUALITY OF LIFE</button>
        </ToggleButton>
        <ToggleButton value="sizeOfCity">
          <button className={styles.selectedButton}>SIZE OF CITY</button>
        </ToggleButton>
      </ToggleButtonGroup>
      <div>Skip for now</div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default IdealArea;
