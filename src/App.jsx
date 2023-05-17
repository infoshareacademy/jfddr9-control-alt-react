import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/pages/Home";
import { MixIt } from "./components/pages/MixIt";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { ModalContainer } from "./components/ModalContainer";
import { UserPanel } from "./components/pages/UserPanel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { ToastMessage } from "./components/ToastMessage";

const Contener = styled.div``;

function App() {
  library.add(fab, faCheckSquare, faCoffee, faRightFromBracket);
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [text, setText] = useState("No message");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
        navigate("/mixit");
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);

  if (isAuth === null) {
    return;
  }

  const createToast = (message) => {
    let shown = document.querySelector(".toasty");
    if (shown !== null) shown.classList.add("show-toasty");
    setText(message);
    setTimeout(() => shown.classList.remove("show-toasty"), 4000);
  };
  const changeTheme = () => {
    let rootm = document.querySelector(":root");
    if (rootm != null) rootm.classList.toggle("lightmode");
  };
  return (
    <Contener>
      <ToastMessage text={text}></ToastMessage>
      <ModalContainer
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        createToast={createToast}
        changeTheme={changeTheme}
      />
      <div className="main-container">
        <Routes>
          <Route
            path={"/"}
            element={!isAuth ? <Home /> : <Navigate to="/mixit" replace />}
          />
          <Route
            path={"/mixit"}
            element={isAuth ? <MixIt /> : <Navigate to="/" replace />}
          />
          <Route
            path={"/user"}
            element={isAuth ? <UserPanel /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Contener>
  );
}

export default App;
