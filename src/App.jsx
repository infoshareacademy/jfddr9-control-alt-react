import "bootstrap/dist/css/bootstrap.min.css";
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

const Contener = styled.div``;

function App() {
  library.add(fab, faCheckSquare, faCoffee, faRightFromBracket);
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  return (
    <Contener>
      <ModalContainer isAuth={isAuth} setIsAuth={setIsAuth} />
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
    </Contener>
  );
}

export default App;
