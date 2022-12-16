import React, { useState } from "react";
import styles from "../sass/createacc.module.scss";
import homefulLogo from "../images/homefulLogo.svg";
import { useNavigate } from "react-router-dom";

const CreateAcc = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleContinue = () => {
    if (email && password) {
      navigate("/personaldetails", { state: { email } });
    } else {
      console.log("email and password required");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <img src={homefulLogo} alt="" />
      <div className={styles.greenFont}>Create your account</div>
      <div className={styles.regularFont}>
        Build a curated discover feed, explore location
        <br />
        after location, and save the best local insights to
        <br />
        lead you to the place you will call home.
      </div>
      <input type="text" placeholder="Email" onChange={handleEmail}></input>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={handlePassword}
      ></input>
      <button onClick={handleShowPassword}>ShowPassword</button>
      <div className={styles.checkBoxContainer}>
        <input type="checkbox" />
        <div className={styles.smallFont}>
          I would like to receive email updates from (Company name)
          <br />
          regarding account notifications and area recommendations.
        </div>
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default CreateAcc;
