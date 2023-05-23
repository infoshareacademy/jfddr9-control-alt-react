import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { auth, db } from "../../api/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Register = (handleCloseR, createToast) => {
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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

    if (password !== repeatPassword) {
      setServerMessage("Passwords are not the same");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        setEmail("");
        setPassword("");
        handleCloseR();
        const userRef = doc(db, "users", jwt.user.uid);
        setDoc(userRef, { email: email, favorites: [] });
        window.localStorage.setItem("user", JSON.stringify(jwt.user));
        createToast("Thanks for registration!");
        setServerMessage("Thanks for registration!");
      })
      .catch((e) => {
        setServerMessage(firebaseErrors[e.code]);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        setEmail(user.email);
        setPassword(""); // Since Google sign-in doesn't provide a password, clear the password field
        handleCloseR();
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, { email: user.email, favorites: [] });
        createToast("Thanks for logging in!");
        setServerMessage("Thanks for logging in!");
      })
      .catch((error) => {
        setServerMessage(firebaseErrors[error.code]);
      });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Control.Feedback type="invalid">
          Provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          required
        />
        <Form.Control.Feedback type="invalid">
          Choose a password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicReapeatPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setRepeatPassword(e.target.value);
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
      <p className="text-danger">{serverMessage}</p>
      <Modal.Footer>
        <Button className="general-btn green-hover" type="submit">
          Register
        </Button>
        <Button
          className="general-btn google-btn green-hover"
          onClick={handleGoogleSignIn}
        >
          <span>Log in with </span>
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        </Button>
        <Button className="general-btn red-hover" onClick={handleCloseR}>
          Close
        </Button>
      </Modal.Footer>
    </Form>
  );
};
