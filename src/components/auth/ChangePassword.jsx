import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { auth } from "../../api/firebase";
import { updatePassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const ChangePassword = (handleClose) => {
  const [password, setPassword] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setServerMessage("");
      return;
    }

    try {
      await updatePassword(auth.currentUser, password);

      setPassword("");
      handleClose();
    } catch (error) {
      setServerMessage(firebaseErrors[error.code]);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleChangePassword}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter new password"
            required
            value={password}
          />
          <Form.Control.Feedback type="invalid">
            Provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger">{serverMessage}</p>
        <Button className="general-btn green-hover" type="submit">
          Change password
        </Button>
      </Form>
    </>
  );
};
