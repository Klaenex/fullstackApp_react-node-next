import { Link } from "react-router-dom";

const Nav = ({ homeName }) => {
  return (
    <nav className="nav">
      <h1 className="title title-big">{homeName}</h1>
      <ul className="nav-list">
        <li className="nav-list-el">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-list-el">
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
