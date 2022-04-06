import { FaSignInAlt } from "react-icons/fa";

function Login({ onChange, onSubmit, loginData }) {
  const { loginEmail, loginPassword } = loginData;

  return (
    <>
      <div className="heading">
        <h1>
          <FaSignInAlt /> Log in
        </h1>
      </div>
      <div className="form-group">
        <form onSubmit={onSubmit}>
          <div className="form-label">
            <label>Email address</label>
          </div>

          <input
            type="email"
            className="login-email form-control"
            name="loginEmail"
            value={loginEmail}
            placeholder="enter your email"
            onChange={onChange}
          />

          <div className="form-label">
            <label>Password</label>
          </div>
          <input
            type="password"
            className="login-password form-control"
            name="loginPassword"
            value={loginPassword}
            placeholder="enter your password"
            onChange={onChange}
          />

          <div className="form-button">
            <button variant="secondary">Log in</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
