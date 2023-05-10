import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
export function AdultOnly() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Jesteś pełnoletni?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Strona zawiera treści nieodpowiednie dla osób poniżej 18 roku życia.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Jestem pełnoletni
          </Button>
          <Button variant="secondary" onClick={() => window.close()}>
            Jestem niepełnoletni
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
