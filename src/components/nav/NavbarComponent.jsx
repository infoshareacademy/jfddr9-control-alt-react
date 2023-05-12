import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";
import { Button, Col } from "react-bootstrap";

export const NavbarComponent = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        sticky="top"
        className="flex-column pb-0"
      >
        <Navbar.Brand as={NavLink} to="/mixit">
          <div className="logo">
            <b>
              m<span>i</span>x.<span>it</span>
            </b>
          </div>
        </Navbar.Brand>

        {!props.isAuth && (
          <Nav className="w-100">
            {/* <Nav.Item>
              <Button variant="primary" type="submit" as={NavLink} to="/">
                Home
              </Button>
            </Nav.Item> */}
            <Nav.Item>
              <Button
                className="navbar-btn"
                variant="primary"
                type="submit"
                onClick={props.handleShow}
              >
                Log in
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Button
                className="navbar-btn"
                variant="primary"
                type="submit"
                onClick={props.handleShowR}
              >
                Register
              </Button>
            </Nav.Item>
          </Nav>
        )}
        {props.isAuth && (
          <Nav className="w-100 nav-justified">
            <Nav.Item>
              <Button
                as={NavLink}
                to="/user"
                variant="primary"
                className="navbar-btn"
              >
                User panel
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="navbar-btn"
                variant="primary"
                onClick={() =>
                  signOut(auth)
                    .then(() => alert("Successfully logged out"))
                    .then(() => navigate("/"))
                    .then(() => props.setIsAuth(false))
                }
              >
                Log out
              </Button>
            </Nav.Item>
          </Nav>
        )}
      </Navbar>
    </>
  );
};
