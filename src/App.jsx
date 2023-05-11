import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

import { AdultOnly } from "./components/AdultOnly";
import { NavbarComponent } from "./components/NavbarComponent";
import { Home } from "./components/Home";
import { ModalTemplate } from "./components/user/ModalTemplate";
import { RemindPassword } from "./components/auth/RemindPassword";

const Contener = styled.div``;

function App() {
  return (
    <Contener>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Contener>
  );
}

export default App;
