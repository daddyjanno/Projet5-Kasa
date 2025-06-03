import { NavLink } from "react-router";
import logo from "../../assets/LOGOmain.png";
import { Component, type ReactNode } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render(): ReactNode {
    return (
      <nav className="Header">
        <img src={logo} alt="logo Kasa" id="mainLogo" />
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          A propos
        </NavLink>
      </nav>
    );
  }
}

export default Header;
