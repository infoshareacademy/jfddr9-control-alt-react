import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { auth, db } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { doc, setDoc } from "firebase/firestore";
import { createToast } from "../../App";

export const Login = (handleClose, handleShowRemind) => {
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
        setServerMessage("");
        handleClose();
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
        handleClose();
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, { email: user.email, favorites: [] });
        createToast("Thanks for logging in!");
        setServerMessage("");
      })
      .catch((error) => {
        setServerMessage(firebaseErrors[error.code]);
      });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
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
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Write your password.
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger">{serverMessage}</p>
        <Modal.Footer>
          <Button className="general-btn green-hover" type="submit">
            <span>Log in</span>
          </Button>
          <Button
            className="general-btn google-btn green-hover"
            onClick={handleGoogleSignIn}
          >
            <span>Log in with </span>
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          </Button>
          <Button
            className="general-btn green-hover"
            onClick={() => {
              handleShowRemind();
            }}
          >
            <span>Forgot password</span>
          </Button>
          <Button className="general-btn red-hover" onClick={handleClose}>
            <span>Close</span>
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};
