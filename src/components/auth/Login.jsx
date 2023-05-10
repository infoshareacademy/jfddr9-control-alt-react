import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Login = (handleClose) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        setEmail("");
        setPassword("");
        handleClose();
        console.log(jwt);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          style={{ fontSize: "0.6rem" }}
          label="By signing up, you agree to our Terms ."
        />
      </Form.Group>

      <Button variant="primary" onClick={handleLogin}>
        Log in
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Form>
  );
};
