import { NavLink } from "react-router";
import logo from "../../assets/LOGOmain.png";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="logo Kasa"
        id="mainLogo"
        className={styles.mainLogo}
      />
      <nav className={styles.nav}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to={"about"}
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
