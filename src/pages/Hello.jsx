import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Register from "../components/Register";
import { register, login, reset } from "../features/auth/authSlice";
import Login from "../components/Login";
import { Container } from "react-bootstrap";
import Spinner from "../components/Spinner";
import "./Hello.css";

function Hello() {
  const [registerData, setRegisterData] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerPassword2: "",
  });

  const { registerName, registerEmail, registerPassword, registerPassword2 } =
    registerData;

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const { loginEmail, loginPassword } = loginData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onRegisterChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onLoginChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    if (registerPassword !== registerPassword2) {
      toast.error("Passwords don't match");
    } else {
      const userData = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      };
      dispatch(register(userData));
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: loginEmail,
      password: loginPassword,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container className="login-container">
        <div className="row d-flex justify-content-around">
          <div className="col-3">
            <Login
              onSubmit={onLoginSubmit}
              onChange={onLoginChange}
              loginData={loginData}
            />
          </div>

          <div className="col-3">
            <Register
              onSubmit={onRegisterSubmit}
              onChange={onRegisterChange}
              registerData={registerData}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hello;
