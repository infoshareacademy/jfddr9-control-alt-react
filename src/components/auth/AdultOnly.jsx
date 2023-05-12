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
      >
        <Modal.Header>
          <Modal.Title>Adults only</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You Must Be at Least 18 Years of Age to Enter.</p>
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
