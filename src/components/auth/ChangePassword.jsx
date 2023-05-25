import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { auth } from "../../api/firebase";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { createToast } from "../../App";

export const ChangePassword = (handleClose) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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

    // Check if the new password is the same as the current password
    if (currentPassword === newPassword) {
      setServerMessage("Passwords must be different");
      return;
    }

    try {
      // Re-authenticate the user using their current credentials
      const credentials = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credentials);

      // Update the password
      await updatePassword(auth.currentUser, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      handleClose();
      createToast("Password changed");
    } catch (error) {
      setServerMessage("Wrong current password");
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleChangePassword}>
        <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter current password"
            required
            value={currentPassword}
          />
          <Form.Control.Feedback type="invalid">
            Provide a valid current password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter new password"
            required
            value={newPassword}
          />
          <Form.Control.Feedback type="invalid">
            Provide a valid new password.
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
