import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik, Field, Form } from "formik";
import homefulLogo from "../images/homefulLogo.svg";
import styles from "../sass/createacc.module.scss";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      currentLocation: "",
      status: [],
    },
    // validate,
    onSubmit: (values) => {
      // pending
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    navigate("/buildfeed");
  };

  useEffect(() => {
    setEmail(location.state.profile.email);
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
      <input type="text" placeholder="Email" value={email} readOnly />
      <div className={styles.smallGreenFont}>NAME</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <div className={styles.smallGreenFont}>BIRTHDATE</div>
          <input
            type="text"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="MM/DD/YYYY"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          <div className={styles.smallGreenFont}>
            CURRENT LOCATION OF RESIDENCY
          </div>
          <input
            type="text"
            name="currentLocation"
            id="currentLocation"
            placeholder="Search by city or zip code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentLocation}
          />
          <div className={styles.smallGreenFont} id="checkbox-group">
            CHECK ALL THAT APPLY TO YOUR STATUS
          </div>
          {/* <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="status" value="YoungProfessional" />
              Young Professional
            </label>
          </div> */}
        </div>
      </form>
      {/* <div className={styles.checkBoxContainer}>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Young Professional</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Homeowner</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Dog Owner</div>
        <input type="checkbox" />
        <div className={styles.checkBoxFont}>Parent</div>
      </div> */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalDetails;
