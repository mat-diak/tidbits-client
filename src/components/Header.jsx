import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/hello");
  };

  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">Tidbits</div>
        <ul>
          {user ? (
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt />
                Log out
              </button>
              <div>Logged in as {user.name}</div>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
