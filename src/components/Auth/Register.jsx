import { FaUser } from "react-icons/fa";

function Register({ onChange, onSubmit, registerData }) {
  const { registerName, registerEmail, registerPassword, registerPassword2 } =
    registerData;

  return (
    <>
      <div className="heading">
        <h1>
          <FaUser /> Join here
        </h1>
      </div>
      <div className="form-group">
        <form className="register-form" onSubmit={onSubmit}>
          <div className="form-label">
            <label>Name</label>
          </div>

          <input
            type="text"
            className="form-control register-name"
            name="registerName"
            value={registerName}
            placeholder="enter your name"
            onChange={onChange}
          />
          <div className="form-label">
            <label>Email address</label>
          </div>
          <input
            type="email"
            className="form-control register-email"
            name="registerEmail"
            value={registerEmail}
            placeholder="enter your email"
            onChange={onChange}
          />

          <div className="form-label">
            <label>Password</label>
          </div>
          <input
            type="password"
            className="form-control register-password"
            name="registerPassword"
            value={registerPassword}
            placeholder="enter your password"
            onChange={onChange}
          />

          <div className="form-label">
            <label>Confirm password</label>
          </div>

          <div className="form-label">
            <input
              type="password"
              className="form-control register-password2"
              name="registerPassword2"
              value={registerPassword2}
              placeholder="confirm password"
              onChange={onChange}
            />
          </div>

          <div className="form-button">
            <button className="btn">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
