import React, { useState } from "react";
import styles from "../sass/createacc.module.scss";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const profile = values;
      if (profile.email && profile.password) {
        navigate("/personaldetails", { state: { profile } });
        console.log(profile, "profile state");
      } else {
        console.log("email and password required");
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EmailForm;
