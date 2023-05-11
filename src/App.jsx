import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { useState } from "react";
import { AdultOnly } from "./components/AdultOnly";
import { NavbarComponent } from "./components/NavbarComponent";
import { Home } from "./components/Home";
import { MyModal } from "./components/user/MyModal";
import { RemindPassword } from "./components/auth/RemindPassword";

const Contener = styled.div``;

function App() {
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
    <Contener>
      <AdultOnly></AdultOnly>
      <NavbarComponent
        handleShow={handleShow}
        handleShowR={handleShowR}
      ></NavbarComponent>

      <MyModal
        child={Register(handleCloseR)}
        handleCloseR={handleCloseR}
        showR={showR}
        title="Register"
      />
      <MyModal
        child={Login(handleClose, handleShowRemind)}
        handleCloseR={handleClose}
        showR={show}
        title="Sign in"
      />
      <MyModal
        child={RemindPassword(handleCloseRemind)}
        handleCloseR={handleCloseRemind}
        showR={showRemind}
        title="
        Remind password"
      />

      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Contener>
  );
}

export default App;
