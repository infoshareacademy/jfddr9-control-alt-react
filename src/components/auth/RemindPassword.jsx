import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { auth } from "../../api/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const RemindPassword = (handleCloseR) => {
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState("");
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

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Sent email!");
        handleCloseR();
      })
      .catch((e) => {
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
          }}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Control.Feedback type="invalid">
          Provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <p className="text-danger">{serverMessage}</p>
      <Button className="general-btn green-hover" type="submit">
        Send email
      </Button>
      <Button className="general-btn red-hover" onClick={handleCloseR}>
        Close
      </Button>
    </Form>
  );
};
