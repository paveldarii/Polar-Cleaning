import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function Success(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Thank you {props.data.contactName} for submitting you information to
          Polar Cleaning!
        </h4>
        <p>We will contact you shortly on the number: {props.data.phone}.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
