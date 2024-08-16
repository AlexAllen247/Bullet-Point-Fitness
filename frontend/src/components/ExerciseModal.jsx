import React from "react";
import { Modal, Button } from "react-bootstrap";

const ExerciseModal = ({
  showModal,
  handleCloseModal,
  selectedVideoUrl,
  selectedExerciseTitle,
}) => {
  const styles = {
    modalHeader: {
      color: "#df0000",
      borderBottom: "2px solid #df0000",
    },
    modalTitle: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      textAlign: "center",
      width: "100%",
    },
    modalBody: {
      padding: "20px",
      textAlign: "center",
    },
    closeButton: {
      backgroundColor: "#df0000",
      borderColor: "#df0000",
    },
    footerButton: {
      backgroundColor: "#df0000",
      borderColor: "#df0000",
      color: "#fff",
      width: "100px",
    },
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title style={styles.modalTitle}>
          {selectedExerciseTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
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
        <Button
          variant="secondary"
          onClick={handleCloseModal}
          style={styles.footerButton}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExerciseModal;
