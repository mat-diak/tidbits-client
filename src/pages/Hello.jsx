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
  // const [switcher, setSwitcher] = useState(false);

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

  // const [switcher, setSwitcher] = useState(false)

  // const handleSwitch = () => {
  //   setSwitcher(s => !s)
  // }

  const handleSwitch = () => {
    const switchers = [...document.querySelectorAll('.switcher')]
    switchers.forEach(item => {
	    item.addEventListener('click', function() {
		    switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		    this.parentElement.classList.add('is-active')
	   })
    })
  }

  return (
    <>
  <section className="forms-section">
  <h1 className="section-title">Welcome</h1>
  <div className="forms">
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login" onClick={handleSwitch}>
        Login
        <span className="underline"></span>
      </button>
      <div className="form form-login">
      <div classNameName="row d-flex justify-content-around">
          <div classNameName="col-3">
            <Login
              onSubmit={onLoginSubmit}
              onChange={onLoginChange}
              loginData={loginData}
            />
          </div>
        </div>
        {/* <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label htmlFor="login-email">E-mail</label>
            <input id="login-email" type="email" required />
          </div>
          <div className="input-block">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" required />
          </div>
        </fieldset> */}
        {/* <button type="submit" className="btn-login">Login</button> */}
      </div>
    </div>
    <div className="form-wrapper">
      <button type="button" className="switcher switcher-signup" onClick={handleSwitch}>
        Sign Up
        <span className="underline"></span>
      </button>
      <form className="form form-signup">
        <div classNameName="col-3">
            <Register
              onSubmit={onRegisterSubmit}
              onChange={onRegisterChange}
              registerData={registerData}
            />
        </div>

        {/* <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label htmlFor="signup-email">E-mail</label>
            <input id="signup-email" type="email" required />
          </div>
          <div className="input-block">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" required />
          </div>
          <div className="input-block">
            <label htmlFor="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required />
          </div>
        </fieldset> */}
        {/* <button type="submit" className="btn-signup">Continue</button> */}
      </form>
    </div>
  </div>
</section>
      {/* <Container classNameName="login-container">
        <div classNameName="row d-flex justify-content-around">
          <div classNameName="col-3">
            <Login
              onSubmit={onLoginSubmit}
              onChange={onLoginChange}
              loginData={loginData}
            />
          </div>

          <div classNameName="col-3">
            <Register
              onSubmit={onRegisterSubmit}
              onChange={onRegisterChange}
              registerData={registerData}
            />
          </div>
        </div>
      </Container> */}
    </>
  );
}

export default Hello;
