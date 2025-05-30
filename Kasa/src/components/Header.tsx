import { NavLink } from "react-router";
import logo from "../assets/LOGOmain.png";

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo Kasa" />
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

export default Header;
