import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../sass/menu.module.scss";

const Menu = ({ setIsOpen }) => {
  const [placesToLiveOpen, setPlacesToLiveOpen] = useState(false);
  const [tipsGuidesOpen, setTipsGuidesOpen] = useState(false);
  const [aboutHomefulOpen, setAboutHomefulOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/createaccount");
    setIsOpen(false);
  };

  const handleBestFamilyClick = () => {
    navigate("/bestforfamily");
    setIsOpen(false);
  };

  const handlePlacesToLive = () => {
    if (placesToLiveOpen === false) {
      setPlacesToLiveOpen(true);
    } else {
      setPlacesToLiveOpen(false);
    }
  };

  const handleTipsGuides = () => {
    if (tipsGuidesOpen === false) {
      setTipsGuidesOpen(true);
    } else {
      setTipsGuidesOpen(false);
    }
  };

  const handleAboutHomeful = () => {
    if (aboutHomefulOpen === false) {
      setAboutHomefulOpen(true);
    } else {
      setAboutHomefulOpen(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.button} onClick={handleLogin}>
          Sign Up or Login
        </button>
        <div className={styles.selectionContainer}>
          {placesToLiveOpen ? (
            <div className={styles.greenFont}>-</div>
          ) : (
            <div className={styles.greenFont}>+</div>
          )}
          <div className={styles.greenFont} onClick={handlePlacesToLive}>
            Places to Live
          </div>
        </div>
        {placesToLiveOpen && (
          <>
            <div className={styles.regularFont}>BEST PLACES TO LIVE</div>
            <div className={styles.regularFont}>
              BEST FOR YOUNG PROFESSIONALS
            </div>
            <div className={styles.regularFont} onClick={handleBestFamilyClick}>
              BEST FOR FAMILIES
            </div>
            <div className={styles.regularFont}>MOST PET-FRIENDLY</div>
            <div className={styles.regularFont}>BEST TO BUY A HOUSE</div>
            <div className={styles.regularFont}>HEALTH & OUTDOORS</div>
          </>
        )}
        <div className={styles.selectionContainer}>
          {tipsGuidesOpen ? (
            <div className={styles.greenFont}>-</div>
          ) : (
            <div className={styles.greenFont}>+</div>
          )}
          <div className={styles.greenFont} onClick={handleTipsGuides}>
            Tips & Guides
          </div>
        </div>
        {tipsGuidesOpen && (
          <>
            <div className={styles.regularFont}>GUIDE FOR HOMEBUYERS</div>
            <div className={styles.regularFont}>GUIDE FOR RENTERS</div>
            <div className={styles.regularFont}>TIPS FOR FIRST TIME MOVING</div>
            <div className={styles.regularFont}>TIPS FOR MOVING ABROAD</div>
          </>
        )}
        <div className={styles.selectionContainer}>
          {aboutHomefulOpen ? (
            <div className={styles.greenFont}>-</div>
          ) : (
            <div className={styles.greenFont}>+</div>
          )}
          <div className={styles.greenFont} onClick={handleAboutHomeful}>
            About Homeful
          </div>
        </div>
        {aboutHomefulOpen && (
          <>
            <div className={styles.regularFont}>ABOUT US</div>
            <div className={styles.regularFont}>HOMEFUL BLOG</div>
            <div className={styles.regularFont}>RESOURCE CENTER</div>
            <div className={styles.regularFont}>CONTACT US</div>
            <div className={styles.regularFont}>HELP</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
