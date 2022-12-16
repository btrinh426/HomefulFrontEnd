import React, { useState } from "react";
import styles from "../sass/navbar.module.scss";
import Menu from "../components/Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      logo
      <div className={styles.menu} onClick={handleMenu}>
        menu
      </div>
      {isOpen && (
        <div>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default NavBar;
