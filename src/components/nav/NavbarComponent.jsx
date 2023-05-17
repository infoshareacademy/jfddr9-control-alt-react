import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";
import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { toastyy } from "../ToastMessage";

export const NavbarComponent = (props) => {
  const navigate = useNavigate();
  library.add(fas);

  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        sticky="top"
        className="flex-column pb-0"
      >
        {props.child}
        <Navbar.Brand as={NavLink} to="/mixit">
          <div className="logo">
            <b>
              m<span>i</span>x.<span>it</span>
            </b>
          </div>
        </Navbar.Brand>

        {!props.isAuth && (
          <Nav>
            {/* <Nav.Item>
              <Button variant="primary" type="submit" as={NavLink} to="/">
                Home
              </Button>
            </Nav.Item> */}
            <Nav.Item>
              <Button className="navbar-btn lime-bg" onClick={props.handleShow}>
                Log in
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Button className="navbar-btn red-bg" onClick={props.handleShowR}>
                Register
              </Button>
            </Nav.Item>
          </Nav>
        )}
        {props.isAuth && (
          <Nav>
            <Nav.Item>
              <Button as={NavLink} to="/" className="navbar-btn green-bg">
                <FontAwesomeIcon icon="fa-solid fa-martini-glass" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button as={NavLink} to="/user" className="navbar-btn green-bg">
                <FontAwesomeIcon icon="fa-solid fa-user-gear" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="navbar-btn purple-bg">
                <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="navbar-btn red-bg"
                onClick={props.handleShowLogOut}
              >
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
              </Button>
            </Nav.Item>
          </Nav>
        )}
      </Navbar>
    </>
  );
};
