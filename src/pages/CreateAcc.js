import React, { useState } from "react";
import styles from "../sass/createacc.module.scss";
import homefulLogo from "../images/homefulLogo.svg";
import EmailForm from "../components/EmailForm";

const CreateAcc = () => {
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
    </div>
  );
};

export default CreateAcc;
