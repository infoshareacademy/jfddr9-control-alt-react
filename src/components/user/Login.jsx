import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Login = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
