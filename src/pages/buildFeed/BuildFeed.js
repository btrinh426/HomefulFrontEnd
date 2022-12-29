import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Position from "./Position";
import AreaChoice from "./AreaChoice";
import IdealArea from "./IdealArea";
import styles from "../../sass/createacc.module.scss";

const BuildFeed = () => {
  const location = useLocation();
  const profileData = location.state.profile;

  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(profileData);
  }, [profileData]);

  const [onAreaChoiceTab, setOnAreaChoiceTab] = useState(false);
  const [onIdealAreaTab, setOnIdealAreaTab] = useState(false);

  const [onPositionContent, setOnPositionContent] = useState(true);
  const [onAreaChoiceContent, setOnAreaChoiceContent] = useState(false);
  const [onIdealAreaContent, setOnIdealAreaContent] = useState(false);

  const [positionChoices, setPositionChoices] = useState(() => [
    "buy",
    "rent",
    "firstTimeMove",
    "movingAbroad",
    "currentResident",
  ]);

  const [areaChoices, setAreaChoices] = useState({});

  const [idealAreaChoices, setIdealAreaChoices] = useState(() => [
    "safety",
    "kidFriendly",
    "jobOpportunites",
    "petFriendly",
    "affordability",
    "easyCommute",
    "outdoorActivites",
    "goodSchools",
    "qualityOfLife",
    "sizeOfCity",
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.greenFont}>Build Your Discover Feed</div>
      <div className={styles.disContainer}>
        <div className={styles.statusContainer}>
          <div className={styles.blackFont}>POSITION</div>
          <div className={styles.greenLine} />
        </div>
        <div className={styles.statusContainer}>
          {onAreaChoiceTab ? (
            <>
              <div className={styles.blackFont}>AREA CHOICE</div>
              <div className={styles.greenLine} />
            </>
          ) : (
            <>
              <div className={styles.greyFont}>AREA CHOICE</div>
              <div className={styles.greyLine} />
            </>
          )}
        </div>
        <div className={styles.statusContainer}>
          {onIdealAreaTab ? (
            <>
              <div className={styles.blackFont}>IDEAL AREA</div>
              <div className={styles.greenLine} />
            </>
          ) : (
            <>
              <div className={styles.greyFont}>IDEAL AREA</div>
              <div className={styles.greyLine} />
            </>
          )}
        </div>
      </div>
      <div className={styles.whiteContainer}>
        {onPositionContent ? (
          <Position
            setOnPositionContent={setOnPositionContent}
            setOnAreaChoiceTab={setOnAreaChoiceTab}
            setOnAreaChoiceContent={setOnAreaChoiceContent}
            setPositionChoices={setPositionChoices}
            positionChoices={positionChoices}
          />
        ) : (
          ""
        )}
        {onAreaChoiceContent ? (
          <AreaChoice
            setOnAreaChoiceContent={setOnAreaChoiceContent}
            setOnIdealAreaTab={setOnIdealAreaTab}
            setOnIdealAreaContent={setOnIdealAreaContent}
            setAreaChoices={setAreaChoices}
          />
        ) : (
          ""
        )}
        {onIdealAreaContent ? (
          <IdealArea
            setIdealAreaChoices={setIdealAreaChoices}
            profile={profile}
            positionChoices={positionChoices}
            areaChoices={areaChoices}
            idealAreaChoices={idealAreaChoices}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BuildFeed;
