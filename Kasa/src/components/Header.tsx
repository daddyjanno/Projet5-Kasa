import { Link } from "react-router";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="about">A propos</Link>
    </nav>
  );
}

export default Header;
