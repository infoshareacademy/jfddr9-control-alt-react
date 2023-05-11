import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/Home";
import { MixIt } from "./components/MixIt";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { ModalContainer } from "./components/ModalContainer";
import { UserPanel } from "./components/user/UserPanel";

const Contener = styled.div``;

function App() {
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
