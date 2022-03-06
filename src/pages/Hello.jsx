import { useState, useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { Container } from "react-bootstrap";

function Hello() {
  const [registerData, setRegisterData] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerPassword2: "",
  });

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

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
  };

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
