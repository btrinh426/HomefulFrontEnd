import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "../../sass/createacc.module.scss";

const Position = ({
  setOnAreaChoiceTab,
  setOnPositionContent,
  setOnAreaChoiceContent,
  setPositionChoices,
  positionChoices,
}) => {
  // const [formats, setFormats] = useState(() => [
  //   "buy",
  //   "rent",
  //   "firstTimeMove",
  //   "movingAbroad",
  //   "currentResident",
  // ]);

  const handleNext = () => {
    setOnAreaChoiceTab(true);
    setOnPositionContent(false);
    setOnAreaChoiceContent(true);
  };

  const handleFormat = (event, newFormats) => {
    setPositionChoices(newFormats);
  };

  return (
    <>
      <div className={styles.blackFont20}>
        Which best fits your current position?
      </div>
      <div className={styles.italic}>
        <i>Select all that apply.</i>
      </div>
      <ToggleButtonGroup
        className={styles.buttonContainer}
        value={positionChoices}
        onChange={handleFormat}
      >
        <ToggleButton value="buy">
          <button className={styles.selectedButton}>LOOKING TO BUY</button>
        </ToggleButton>
        <ToggleButton value="rent">
          <button className={styles.selectedButton}>LOOKING TO RENT</button>
        </ToggleButton>
        <ToggleButton value="firstTimeMove">
          <button className={styles.selectedButton}>FIRST TIME MOVING</button>
        </ToggleButton>
        <ToggleButton value="movingAbroad">
          <button className={styles.selectedButton}>MOVING ABROAD</button>
        </ToggleButton>
        <ToggleButton value="currentResident">
          <button className={styles.selectedButton}>
            CURRENT RESIDENT, NOT MOVING
          </button>
        </ToggleButton>
      </ToggleButtonGroup>
      <div>Skip for now</div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Position;
