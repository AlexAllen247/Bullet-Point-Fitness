import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import workoutService from "../services/workout";

const Workout = ({ userId }) => {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    if (userId) {
      const fetchWorkouts = async () => {
        try {
          const fetchedWorkouts = await workoutService.get(userId);
          setWorkouts(
            Array.isArray(fetchedWorkouts)
              ? fetchedWorkouts
              : [fetchedWorkouts],
          );
        } catch (error) {
          console.error("Error fetching workouts", error);
          setWorkouts([]);
        }
      };

      fetchWorkouts();
    }
  }, [userId]);

  const handleExerciseClick = (embedUrl) => {
    setSelectedVideoUrl(embedUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.map((workout, index) => (
        <div key={index}>
          <h3>Workout {index + 1}</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Exercise</th>
                <th>Weight</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {workout.exercises.map((exercise, exerciseIndex) => (
                <tr key={exerciseIndex}>
                  <td
                    onClick={() =>
                      handleExerciseClick(exercise.exerciseId.embedUrl)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {exercise.exerciseId.title}
                  </td>
                  <td>{/* Display weight if available */}</td>
                  <td>{/* Display reps if available */}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
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
    </div>
  );
};

export default Workout;
