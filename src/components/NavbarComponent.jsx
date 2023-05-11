import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";

export const NavbarComponent = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/mixit">
            Mix.it
          </Navbar.Brand>
          {!props.isAuth && (
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link onClick={props.handleShow}>Log in</Nav.Link>
              <Nav.Link onClick={props.handleShowR}>Register</Nav.Link>
            </Nav>
          )}
          {props.isAuth && (
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/user">
                User panel
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  signOut(auth)
                    .then(() => alert("Successfully logged out"))
                    .then(() => navigate("/"))
                    .then(() => props.setIsAuth(false))
                }
              >
                Log out
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};
