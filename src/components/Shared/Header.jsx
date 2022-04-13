import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "./header.css";

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
      <div className="header-main">
        <div className="header-title">Tidbits</div>
        <div className="header-user">
          {user && (
            <>
              <div className="header-greeting">Hello, {user.name}</div>
              <a href="/#" className="header-logout" onClick={onLogout}>
                <FaSignOutAlt />
                Log out
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
