import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const NavbarComponent = (props) => {
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
            <Nav.Item>
              <Button
                className="navbar-btn purple-bg"
                onClick={props.changeTheme}
              >
                <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
              </Button>
            </Nav.Item>
          </Nav>
        )}
        {props.isAuth && (
          <Nav>
            <Nav.Item>
              <Button as={NavLink} to="/" className="navbar-btn teal-bg">
                <FontAwesomeIcon icon="fa-solid fa-martini-glass" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button as={NavLink} to="/user" className="navbar-btn green-bg">
                <FontAwesomeIcon icon="fa-solid fa-user-gear" />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                className="navbar-btn purple-bg"
                onClick={props.changeTheme}
              >
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
