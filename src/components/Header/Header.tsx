import { NavLink } from "react-router";
import logo from "../../assets/LOGOmain.png";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to={"/Projet5-Kasa/"}>
        <img
          src={logo}
          alt="logo Kasa"
          id="mainLogo"
          className={styles.mainLogo}
        />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to={"/Projet5-Kasa/"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/Projet5-Kasa/about"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
