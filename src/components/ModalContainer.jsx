import { useState } from "react";
import { AdultOnly } from "./AdultOnly";
import { NavbarComponent } from "./NavbarComponent";
import { ModalTemplate } from "./user/ModalTemplate";
import { RemindPassword } from "./auth/RemindPassword";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const ModalContainer = () => {
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
