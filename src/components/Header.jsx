import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../features/auth/authSlice'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/hello')
  }

  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to="/">Habite</Link>
        </div>
        <ul>
          {user ? (<li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Log out
              </button>
          </li>) : (<><li>
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
          </li></>)}
        </ul>
      </div>
    </header>
  );
}

export default Header;
