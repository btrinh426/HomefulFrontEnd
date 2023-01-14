import React, { useState, useRef } from "react";
import styles from "../sass/createacc.module.scss";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const EmailForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const cookie = new Cookies();

  const url = window.location.pathname;

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const profile = {
        email: values.email,
        password: values.password,
      };
      switch (url) {
        case "/createaccount":
          if (profile.email && profile.password && url === "/createaccount") {
            navigate("/personaldetails", { state: { profile } });
            console.log(profile, "profile state");
          } else {
            console.log("email and password required");
          }
          break;
        case "/login":
          axios({
            method: "post",
            url: "https://localhost:7108/api/JwtAuth/Authorize",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              username: values.email,
              password: values.password,
            },
          }).then((res) => cookie.set("jwt_access", res.data, { path: "/" }));
          break;
        default:
          return "default";
      }
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          ref={emailInputRef}
        />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          ref={passwordInputRef}
        />
        <button type="button" onClick={handleShowPassword}>
          Show Password
        </button>
        <div className={styles.checkBoxContainer}>
          <input type="checkbox" />
          <div className={styles.smallFont}>
            I would like to receive email updates from (Company name)
            <br />
            regarding account notifications and area recommendations.
          </div>
        </div>
        <button className={styles.continueButton} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
