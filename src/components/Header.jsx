import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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
      <Navbar>
        <Container>
          <Navbar.Brand>Tidbits</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {user && (
              <>
                <Navbar.Text>Hello, {user.name}</Navbar.Text>
                <Nav.Link onClick={onLogout}>
                  <FaSignOutAlt />
                  Log out
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
