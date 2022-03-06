import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to="/">Habite</Link>
        </div>
        <ul>
          <li>
            <Link to="/hello">
              <FaSignInAlt />
              Log in
            </Link>
          </li>
          <li>
            <Link to="/hello">
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
