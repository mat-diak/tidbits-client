import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Register({ onChange, onSubmit, registerData }) {
  const { registerName, registerEmail, registerPassword, registerPassword2 } = registerData;

  return (
    <>
      <section>
        <h1>
          <FaUser /> or join us here
        </h1>
        <p>Fill in your details</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="registerName"
              name="registerName"
              value={registerName}
              placeholder="enter your name"
              onChange={onChange}
            />
            <input
              type="email"
              className="form-control"
              id="registerEmail"
              name="registerEmail"
              value={registerEmail}
              placeholder="enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              name="registerPassword"
              value={registerPassword}
              placeholder="enter your password"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="registerPassword2"
              name="registerPassword2"
              value={registerPassword2}
              placeholder="confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" className="btn btn-block">
              Register
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
