import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export const NavbarComponent = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mix.it</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={props.handleShow}>Log in</Nav.Link>
            <Nav.Link onClick={props.handleShowR}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
