import Modal from "react-bootstrap/Modal";

export const ModalTemplate = (props) => {
  return (
    <Modal show={props.showR} onHide={props.handleCloseR}>
      <Modal.Header>
        <Modal.Title>
          <div className="logo modal-logo">
            <b>
              <span>{props.title}</span>
            </b>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.child}</Modal.Body>
    </Modal>
  );
};
