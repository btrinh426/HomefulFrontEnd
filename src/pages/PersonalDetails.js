import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik, FormikProvider, Field } from "formik";
import homefulLogo from "../images/homefulLogo.svg";
import styles from "../sass/createacc.module.scss";
import { listItemSecondaryActionClasses } from "@mui/material";

const PersonalDetails = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: location.state.profile.email,
      password: location.state.profile.password,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      currentLocation: "",
      status: [],
    },
    onSubmit: (values) => {
      const profile = values;
      if (
        profile.firstName &&
        profile.lastName &&
        profile.dateOfBirth &&
        profile.currentLocation
      ) {
        navigate("/buildfeed", { state: { profile } });
        console.log(profile, "profile");
      }
    },
  });

  return (
    <div className={styles.container}>
      <img src={homefulLogo} alt="" />
      <div className={styles.greenFont}>Personal Details</div>
      <div className={styles.regularFont}>
        Continue creating your profile by telling us a<br />
        little more about yourself.
      </div>
      <div className={styles.smallGreenFont}>EMAIL</div>
      <input
        type="text"
        placeholder="Email"
        value={formik.values.email}
        readOnly
      />
      <div className={styles.smallGreenFont}>NAME</div>
      <FormikProvider value={formik}>
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
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field
                  type="checkbox"
                  name="status"
                  value="youngProfessional"
                />
                Young Professional
              </label>
              <label>
                <Field type="checkbox" name="status" value="homeOwner" />
                Home Owner
              </label>
              <label>
                <Field type="checkbox" name="status" value="dogOwner" />
                Dog Owner
              </label>
              <label>
                <Field type="checkbox" name="status" value="parent" />
                Parent
              </label>
            </div>
            <button type="submit">Next</button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default PersonalDetails;
