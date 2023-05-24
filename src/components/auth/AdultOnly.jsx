import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AdultOnly() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleAdultClick = () => {
    localStorage.setItem("isAdult", true);
    handleClose();
  };

  const handleNotAdultClick = () => {
    window.location.href = "https://www.disney.pl/";
  };

  useEffect(() => {
    const isAdult = localStorage.getItem("isAdult");
    if (isAdult) {
      setShow(false);
    }
  }, []);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="modal"
      >
        <Modal.Header>
          <Modal.Title>
            <h1>Adults only</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            By accessing our website, you confirm that you are of legal drinking
            age and understand that the content is for informational purposes
            only.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="general-btn green-hover"
            onClick={handleAdultClick}
          >
            ENTER
          </Button>
          <Button
            className="general-btn red-hover"
            onClick={handleNotAdultClick}
          >
            EXIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
