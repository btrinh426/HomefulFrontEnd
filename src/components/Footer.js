import React from "react";
import styles from "../sass/footer.module.scss";
import FacebookIcon from "../images/icons/FacebookIcon.svg";
import IGIcon from "../images/icons/IGIcon.svg";
import TwitterIcon from "../images/icons/TwitterIcon.svg";
import YoutubeIcon from "../images/icons/YoutubeIcon.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.links}>ABOUT US</div>
        <div className={styles.links}>HOMEFUL BLOG</div>
        <div className={styles.links}>CONTACT US</div>
        <div className={styles.links}>RESOURCE CENTER</div>
        <div className={styles.links}>PRIVACY AND COOKIES POLICY</div>
        <div className={styles.links}>PRESS ROOM</div>
        <div className={styles.links}>HELP</div>
        <div className={styles.links}>USER AGREEMENT</div>
        <div className={styles.links}>ACCESSIBILITY STATEMENT</div>
        <div className={styles.iconContainer}>
          <img className={styles.icons} src={FacebookIcon} alt="" />
          <img className={styles.icons} src={IGIcon} alt="" />
          <img className={styles.icons} src={TwitterIcon} alt="" />
          <img className={styles.icons} src={YoutubeIcon} alt="" />
        </div>
        <div className={styles.copyrightContainer}>
          <div>copyright link</div>
          <div className={styles.copyright}>logo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
