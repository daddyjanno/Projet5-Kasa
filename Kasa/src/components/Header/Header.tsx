import { NavLink } from "react-router";
import logo from "../../assets/LOGOmain.png";
import { Component, type ReactNode } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render(): ReactNode {
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
              `${styles.navLink}${isActive ? " active" : ""}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              `${styles.navLink}${isActive ? " active" : ""}`
            }
          >
            A propos
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
