import Modal from "react-bootstrap/Modal";

export const ModalTemplate = (props) => {
  return (
    <Modal show={props.showR} onHide={props.handleCloseR}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.child}</Modal.Body>
    </Modal>
  );
};
