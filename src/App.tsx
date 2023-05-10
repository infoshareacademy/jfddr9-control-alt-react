import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Carousel } from "./components/nav/Carousel";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { Forgotpassword } from "./components/user/Forgotpassword";
import { useState } from "react";
import { AdultOnly } from "./components/AdultOnly";
import { NavbarComponent } from "./components/NavbarComponent";
import { Home } from "./components/Home";

const Contener = styled.div``;

function App() {
  const text: any = useSelector((state) => state);

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
      <Login handleClose={handleClose} show={show} />
      <Register handleCloseR={handleCloseR} showR={showR} />
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
