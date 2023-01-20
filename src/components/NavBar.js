import React, { useState } from "react";
import styles from "../sass/navbar.module.scss";
import MenuBar from "../images/buttons/MenuBar.svg";
import Menu from "../components/Menu";
import { ClickAwayListener } from "@mui/base";

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

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      logo
      <img
        className={styles.menu}
        onClick={handleMenu}
        src={MenuBar}
        alt="menu"
      />
      {isOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={styles.menuPop}>
            <Menu setIsOpen={setIsOpen} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default NavBar;
