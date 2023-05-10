import { auth, db } from "../../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export const Register = (handleCloseR) => {
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setServerMessage("");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        setEmail("");
        setPassword("");
        handleCloseR();
        console.log(jwt);
        const userRef = doc(db, "users", jwt.user.uid);
        setDoc(userRef, { email: email });
        alert("Thanks for registration!");
      })
      .catch((e) => {
        console.dir(e);
        setServerMessage(firebaseErrors[e.code]);
      });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleRegister}>
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
        {/* <Form.Text className="text-muted"></Form.Text> */}
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
          required
        />
        <Form.Control.Feedback type="invalid">
          Choose a password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          required
          type="checkbox"
          style={{ fontSize: "0.6rem" }}
          label="By signing up, you agree to our Terms ."
          feedback="You must agree to terms and conditions."
          feedbackType="invalid"
        />
      </Form.Group>
      <p class="text-danger">{serverMessage}</p>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Button variant="secondary" onClick={handleCloseR}>
        Close
      </Button>
    </Form>
  );
};
