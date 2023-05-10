import Modal from "react-bootstrap/Modal";

export const MyModal = (props) => {
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

        <Modal.Body>{props.child}</Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
