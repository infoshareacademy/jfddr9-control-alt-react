import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Register } from "./components/auth/Register";
import { Home } from "./components/Home";
import { MixIt } from "./components/MixIt";

const Contener = styled.div``;

function App() {
  return (
    <Contener>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/mixit"} element={<MixIt />} />
      </Routes>
    </Contener>
  );
}

export default App;
