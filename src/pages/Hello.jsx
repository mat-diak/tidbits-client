import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Register from "../components/Register";
import { register, reset } from "../features/auth/authSlice";
import Login from "../components/Login";
import { Container } from "react-bootstrap";
import Spinner from '../components/Spinner'

function Hello() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = registerData;

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

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Container>
        <div className="row">
          <div className="col-6">
            <Login
              onSubmit={onSubmit}
              onChange={onLoginChange}
              loginData={loginData}
            />
          </div>

          <div className="col-6">
            <Register
              onSubmit={onSubmit}
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
