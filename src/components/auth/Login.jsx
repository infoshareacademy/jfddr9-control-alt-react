import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Login = (handleClose) => {
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setServerMessage("");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        setEmail("");
        setPassword("");
        handleClose();
        console.log(jwt);
      })
      .catch((e) => {
        console.dir(e);
        setServerMessage(firebaseErrors[e.code]);
      });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Control.Feedback type="invalid">
          Provide a valid email.
        </Form.Control.Feedback>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Write your password.
        </Form.Control.Feedback>
      </Form.Group>
      <p class="text-danger">{serverMessage}</p>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Form>
  );
};
