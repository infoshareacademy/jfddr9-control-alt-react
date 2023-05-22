import { useState } from "react";
import { AdultOnly } from "./auth/AdultOnly";
import { NavbarComponent } from "./nav/NavbarComponent";
import { ModalTemplate } from "./ModalTemplate";
import { RemindPassword } from "./auth/RemindPassword";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { LogOutComponent } from "./auth/LogOutComponent";

export const ModalContainer = ({
  isAuth,
  setIsAuth,
  createToast,
  changeTheme,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const [showRemind, setShowRemind] = useState(false);
  const handleCloseRemind = () => setShowRemind(false);
  const handleShowRemind = () => setShowRemind(true);

  const [showLogOut, setShowLogOut] = useState(false);
  const handleCloseLogOut = () => setShowLogOut(false);
  const handleShowLogOut = () => setShowLogOut(true);

  return (
    <>
      <AdultOnly></AdultOnly>
      <NavbarComponent
        handleShow={handleShow}
        handleShowR={handleShowR}
        handleShowLogOut={handleShowLogOut}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        changeTheme={changeTheme}
      ></NavbarComponent>

      <ModalTemplate
        child={Register(handleCloseR, createToast)}
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
        child={RemindPassword(handleCloseRemind, createToast)}
        handleCloseR={handleCloseRemind}
        showR={showRemind}
        title="
      Remind password"
      />
      <ModalTemplate
        child={LogOutComponent(handleCloseLogOut, setIsAuth, createToast)}
        handleCloseR={handleCloseLogOut}
        showR={showLogOut}
        title="
      Log out?"
      />
    </>
  );
};
