import { Button, Card } from "react-bootstrap";
import { FavoriteDrinksUserPanel } from "../FavouriteDrinksUserPanel";
import { useEffect, useState } from "react";
import { ChangeEmail } from "../auth/ChangeEmail";
import { ChangePassword } from "../auth/ChangePassword";
import { auth } from "../../api/firebase";

export const UserPanel = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailButtonClick = () => {
    setShowEmailInput(!showEmailInput);
    setShowPasswordInput(false);
  };

  const handlePasswordButtonClick = () => {
    setShowPasswordInput(!showPasswordInput);
    setShowEmailInput(false);
  };

  useEffect(() => {
    const loggedUser = auth.currentUser.email;
    setUserEmail(loggedUser);
  }, [setUserEmail]);

  return (
    <>
      <div className="userpanel userpanel-background">
        <div className="userpanel-header">
          <h1>User panel</h1>
          <p>Hey {userEmail}!</p>
        </div>
        <div className="userpanel-options">
          <h2>Change your email and password.</h2>
          <Button
            onClick={handleEmailButtonClick}
            className="general-btn green-hover"
          >
            {showEmailInput ? "Hide" : "Change your email"}
          </Button>
          {showEmailInput ? <ChangeEmail handleClose={setUserEmail} /> : null}

          <Button
            onClick={handlePasswordButtonClick}
            className="general-btn green-hover"
          >
            {showPasswordInput ? "Hide" : "Change your password"}
          </Button>
          {showPasswordInput ? <ChangePassword /> : null}
        </div>

        <FavoriteDrinksUserPanel />
      </div>
    </>
  );
};
