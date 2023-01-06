import React, { useState } from "react";
import styles from "../sass/navbar.module.scss";
import MenuBar from "../images/buttons/MenuBar.svg";
import Menu from "../components/Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
      setIsMenuOpen(false);
    } else {
      setIsOpen(false);
      setIsMenuOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      logo
      {isMenuOpen && (
        <img
          className={styles.menu}
          onClick={handleMenu}
          src={MenuBar}
          alt="menu"
        />
      )}
      {isOpen && (
        <div>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default NavBar;
