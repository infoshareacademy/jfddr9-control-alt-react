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

const Contener = styled.div``;

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);
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
        child={Login(handleClose)}
        handleCloseR={handleClose}
        showR={show}
        title="Sign in"
      />

      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>

      {/* <Carousel></Carousel> */}
      {/* <Login></Login> */}
      {/* <Forgotpassword></Forgotpassword> */}
      {/* <Register></Register> */}
    </Contener>
  );
}

export default App;
