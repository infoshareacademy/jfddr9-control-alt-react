import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Register = (props) => {
  console.log(props.showR);
  return (
    <Modal
      show={props.showR}
      onHide={props.handleCloseR}
      // className="modal show"
      // style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                style={{ fontSize: "0.6rem" }}
                label="By signing up, you agree to our Terms ."
              />
            </Form.Group>
            <Button variant="secondary" onClick={props.handleCloseR}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleCloseR}>
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
