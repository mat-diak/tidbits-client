import { FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login({ onChange, onSubmit, loginData }) {
  const { loginEmail, loginPassword } = loginData;

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt /> Log in
        </h1>
      </section>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="login-email form-control"
            name="loginEmail"
            value={loginEmail}
            placeholder="enter your email"
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Don't trust us with your email!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="login-password form-control"
            name="loginPassword"
            value={loginPassword}
            placeholder="enter your password"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="secondary" type="submit">
          Log in
        </Button>
      </Form>
    </>
  );
}

export default Login;
