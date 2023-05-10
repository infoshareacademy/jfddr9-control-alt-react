import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Carousel } from "./components/nav/Carousel";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { Forgotpassword } from "./components/user/Forgotpassword";

const Contener = styled.div``;

function App() {
  const text: any = useSelector((state) => state);

  return (
    <Contener>
      {text.exampleReducer.text}
      <Routes>
        <Route path={"/home"} element={<div>home</div>} />
        <Route path={"/login"} element={<div>login</div>} />
      </Routes>
      <Carousel></Carousel>
      <Login></Login>
      <Forgotpassword></Forgotpassword>
      <Register></Register>
    </Contener>
  );
}

export default App;
