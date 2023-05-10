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
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.child}</Modal.Body>
    </Modal>
  );
};
