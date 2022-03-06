import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Register({ onChange, onSubmit, registerData }) {
  const { name, email, password, password2 } = registerData;

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
              id="name"
              name="name"
              value={name}
              placeholder="enter your name"
              onChange={onChange}
            />
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="enter your password"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
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
