import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register({ onChange, onSubmit, registerData }) {
  const { registerName, registerEmail, registerPassword, registerPassword2 } =
    registerData;

  return (
    <>
      <section>
        <h1>
          <FaUser /> Join here
        </h1>
      </section>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            className="register-name form-control"
            name="registerName"
            value={registerName}
            placeholder="enter your name"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="register-email form-control"
            name="registerEmail"
            value={registerEmail}
            placeholder="enter your email"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="register-password form-control"
            name="registerPassword"
            value={registerPassword}
            placeholder="enter your password"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            className="register-password2 form-control"
            name="registerPassword2"
            value={registerPassword2}
            placeholder="confirm password"
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;
