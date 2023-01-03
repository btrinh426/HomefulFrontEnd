import React from "react";
import homefulLogo from "../images/homefulLogo.svg";
import EmailForm from "../components/EmailForm";
import styles from "../sass/createacc.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <img src={homefulLogo} alt="" />
      <div className={styles.greenFont}>Log In</div>
      <EmailForm />
    </div>
  );
};

export default Login;
