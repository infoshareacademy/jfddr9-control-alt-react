import { useState } from "react";
import { AdultOnly } from "./auth/AdultOnly";
import { NavbarComponent } from "./nav/NavbarComponent";
import { ModalTemplate } from "./ModalTemplate";
import { RemindPassword } from "./auth/RemindPassword";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const ModalContainer = ({ isAuth, setIsAuth }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const [showRemind, setShowRemind] = useState(false);
  const handleCloseRemind = () => setShowRemind(false);
  const handleShowRemind = () => setShowRemind(true);
  return (
    <>
      <AdultOnly></AdultOnly>
      <NavbarComponent
        handleShow={handleShow}
        handleShowR={handleShowR}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      ></NavbarComponent>

      <ModalTemplate
        child={Register(handleCloseR)}
        handleCloseR={handleCloseR}
        showR={showR}
        title="Register"
      />
      <ModalTemplate
        child={Login(handleClose, handleShowRemind)}
        handleCloseR={handleClose}
        showR={show}
        title="Sign in"
      />
      <ModalTemplate
        child={RemindPassword(handleCloseRemind)}
        handleCloseR={handleCloseRemind}
        showR={showRemind}
        title="
      Remind password"
      />
    </>
  );
};
