import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "../../sass/createacc.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IdealArea = ({
  setIdealAreaChoices,
  profile,
  positionChoices,
  areaChoices,
  idealAreaChoices,
}) => {
  const [finalProfile, setFinalProfile] = useState();

  const navigate = useNavigate();

  const combineProfileInfo = async () => {
    await setFinalProfile({
      profile: profile,
      position: positionChoices,
      areaOfChoice: areaChoices,
      idealArea: idealAreaChoices,
    });
  };

  const handleSubmit = () => {
    combineProfileInfo();
  };

  const handleFormat = (event, newFormats) => {
    setIdealAreaChoices(newFormats);
  };

  useEffect(() => {
    if (finalProfile !== undefined) {
      axios({
        method: "post",
        url: "https://localhost:7108/api/Profiles",
        headers: {
          "Content-Type": "application/json",
        },
        data: finalProfile,
      }).then((res) => {
        if (res) {
          navigate("/");
          console.log(res.data, "response");
        }
      });
    }
  }, [finalProfile, navigate]);

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
        <ToggleButton value="safety" selected={false}>
          <button className={styles.selectedButton}>SAFETY</button>
        </ToggleButton>
        <ToggleButton value="kidFriendly" selected={false}>
          <button className={styles.selectedButton}>KID-FRIENDLY</button>
        </ToggleButton>
        <ToggleButton value="jobOpportunites" selected={false}>
          <button className={styles.selectedButton}>JOB OPPORTUNITIES</button>
        </ToggleButton>
        <ToggleButton value="petFriendly" selected={false}>
          <button className={styles.selectedButton}>PET-FRIENDLY</button>
        </ToggleButton>
        <ToggleButton value="affordability" selected={false}>
          <button className={styles.selectedButton} selected={false}>
            AFFORDABILITY
          </button>
        </ToggleButton>
        <ToggleButton value="easyCommute" selected={false}>
          <button className={styles.selectedButton} selected={false}>
            EASY COMMUTE
          </button>
        </ToggleButton>
        <ToggleButton value="outdoorActivites" selected={false}>
          <button className={styles.selectedButton}>OUTDOOR ACTIVITIES</button>
        </ToggleButton>
        <ToggleButton value="goodSchools" selected={false}>
          <button className={styles.selectedButton}>GOOD SCHOOLS</button>
        </ToggleButton>
        <ToggleButton value="qualityOfLife" selected={false}>
          <button className={styles.selectedButton}>QUALITY OF LIFE</button>
        </ToggleButton>
        <ToggleButton value="sizeOfCity" selected={false}>
          <button className={styles.selectedButton}>SIZE OF CITY</button>
        </ToggleButton>
      </ToggleButtonGroup>
      <div>Skip for now</div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default IdealArea;
