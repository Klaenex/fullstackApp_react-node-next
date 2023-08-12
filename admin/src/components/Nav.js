import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
