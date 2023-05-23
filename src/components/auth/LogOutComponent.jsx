import { Button, Modal } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";
import { createToast } from "../../App";

export const LogOutComponent = (handleCloseLogOut, setIsAuth) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => createToast("Logged out"))
      .then(() => navigate("/"))
      .then(() => {
        setIsAuth(false);
        handleCloseLogOut();
      });
  };
  return (
    <>
      <div>
        <p>Do you want to sign out?</p>
        <Modal.Footer>
          <Button className="general-btn green-hover" onClick={handleLogOut}>
            Log out
          </Button>
          <Button
            className="general-btn red-hover"
            onClick={() => {
              handleCloseLogOut();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
};
