import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

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
          <Modal.Title>Jesteś pełnoletni?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Strona zawiera treści nieodpowiednie dla osób poniżej 18 roku życia.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdultClick}>
            Jestem pełnoletni
          </Button>
          <Button variant="secondary" onClick={handleNotAdultClick}>
            Jestem niepełnoletni
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
