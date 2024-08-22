import { Link } from "react-router-dom";

import "./styles.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/new"} className="new-btn">
            Novo post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
