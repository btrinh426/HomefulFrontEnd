import React from "react";
import styles from "../sass/createacc.module.scss";
import homefulLogo from "../images/homefulLogo.svg";
import EmailForm from "../components/EmailForm";
import GoogleButton from "../images/buttons/GoogleButton.svg";
import FacebookButton from "../images/buttons/FBButton.svg";
import { useNavigate } from "react-router-dom";

const CreateAcc = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };

  const handlePrivacyPolicy = () => {
    console.log("clicked");
  };

  const handleTermsOfUse = () => {
    console.log("clicked");
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
      <EmailForm />
      <div className={styles.orContainer}>
        <hr className={styles.hLine} />
        <div className={styles.regularFont}>OR</div>
        <hr className={styles.hLine} />
      </div>
      <img src={GoogleButton} alt="Google Button" />
      <img src={FacebookButton} alt="Facebook Button" />
      <div className={styles.regularFont}>
        Already have an acount?{" "}
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handleSignIn}
        >
          Sign in
        </span>{" "}
        instead.
      </div>
      <div className={styles.smallFont}>
        By proceeding you acknowledge and agree to our{" "}
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handlePrivacyPolicy}
        >
          Privacy Policy
        </span>{" "}
        and{" "}
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handleTermsOfUse}
        >
          Terms of Use
        </span>
        .
      </div>
    </div>
  );
};

export default CreateAcc;
