import React from "react";
import { Modal, Button } from "react-bootstrap";

const ExerciseModal = ({ showModal, handleCloseModal, selectedVideoUrl }) => (
  <Modal show={showModal} onHide={handleCloseModal} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Exercise Video</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <iframe
        src={selectedVideoUrl}
        title="Exercise Video"
        width="100%"
        height="400px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ExerciseModal;
