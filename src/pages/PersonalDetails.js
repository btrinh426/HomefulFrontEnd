import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import homefulLogo from "../images/homefulLogo.svg";
import styles from "../sass/createacc.module.scss";

const PersonalDetails = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(location.state.email);
  }, []);
  return (
    <div className={styles.container}>
      <img src={homefulLogo} alt="" />
      <div className={styles.greenFont}>Personal Details</div>
      <div className={styles.regularFont}>
        Continue creating your profile by telling us a<br />
        little more about yourself.
      </div>
      <div className={styles.smallGreenFont}>EMAIL</div>
      <input type="text" placeholder="Email" value={email}></input>
      <div className={styles.smallGreenFont}>NAME</div>
      <input type="text" placeholder="First Name"></input>
      <input type="text" placeholder="Last Name"></input>
      <div className={styles.smallGreenFont}>BIRTHDATE</div>
      <input type="text" placeholder="MM/DD/YYYY"></input>
      <div className={styles.smallGreenFont}>CURRENT LOCATION OF RESIDENCY</div>
      <input type="text" placeholder="Search by city or zip code"></input>
      <div className={styles.smallGreenFont}>
        CHECK ALL THAT APPLY TO YOUR STATUS
      </div>
      <div className={styles.checkBoxContainer}>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Young Professional</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Homeowner</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Dog Owner</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Parent</div>
      </div>
      <button>Next</button>
    </div>
  );
};

export default PersonalDetails;
