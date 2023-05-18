import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { auth } from "../../api/firebase";
import { updateEmail } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const ChangeEmail = (handleClose, handleShowRemind) => {
  const [email, setEmail] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const handleChangeEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setServerMessage("");
      return;
    }
    // verifyBeforeUpdateEmail < Robimy to?
    updateEmail(auth.currentUser, email)
      .then((jwt) => {
        setEmail("");
        setPassword("");
        handleClose();
      })
      .catch((e) => {
        setServerMessage(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleChangeEmail}>
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
        <p className="text-danger">{serverMessage}</p>
        <Button className="general-btn green-hover" type="submit">
          Change email
        </Button>
      </Form>
    </>
  );
};
