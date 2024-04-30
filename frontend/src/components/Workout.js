import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import workoutService from "../services/workout";

const Workout = ({ userId, notify }) => {
  const [workouts, setWorkouts] = useState([]);
  const [editState, setEditState] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const fetchedWorkouts = await workoutService.get(userId);
        console.log(fetchedWorkouts);
        setWorkouts(
          Array.isArray(fetchedWorkouts) ? fetchedWorkouts : [fetchedWorkouts],
        );
      } catch (error) {
        console.error("Error fetching workouts", error);
        setWorkouts([]);
      }
    };

    if (userId) {
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

  const toggleEdit = (workoutIndex, exerciseIndex, field) => {
    setEditState({ workoutIndex, exerciseIndex, field });
  };

  const handleUpdateExercise = (workoutIndex, exerciseIndex, field, value) => {
    const updatedWorkouts = [...workouts];
    let performance =
      updatedWorkouts[workoutIndex].exercises[exerciseIndex].performance;
    if (!performance.length) performance.push({ weight: "", reps: "" });
    performance[performance.length - 1][field] = value;
    setWorkouts(updatedWorkouts);
  };

  const saveExerciseUpdate = async (workoutIndex, exerciseIndex) => {
    const workout = workouts[workoutIndex];
    const exercise = workout.exercises[exerciseIndex];
    const performance = exercise.performance.length
      ? exercise.performance[exercise.performance.length - 1]
      : { weight: "", reps: "" };

    try {
      const updatedExercise = await workoutService.updateExercise(
        workout._id,
        exercise.exerciseId.id,
        performance,
      );

      const updatedWorkouts = [...workouts];
      updatedWorkouts[workoutIndex].exercises[exerciseIndex].performance =
        updatedExercise.exercises[exerciseIndex].performance;
      setWorkouts(updatedWorkouts);
      setEditState({});
      notify("Exercise updated successfully!");
      console.log("Exercise updated successfully!");
    } catch (error) {
      console.error("Failed to update exercise", error);
      notify("Failed to update exercise: " + error.message, "error");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.map((workout, workoutIndex) => (
        <div key={workoutIndex}>
          <h3>Workout {workoutIndex + 1}</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Exercise</th>
                <th>Weight</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {workout.exercises.map((exercise, exerciseIndex) => {
                const lastPerformance = exercise.performance.length
                  ? exercise.performance[exercise.performance.length - 1]
                  : { weight: "Set weight", reps: "Set reps" };
                return (
                  <tr key={exerciseIndex}>
                    <td
                      onClick={() =>
                        handleExerciseClick(exercise.exerciseId.embedUrl)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {exercise.exerciseId.title}
                    </td>
                    <td
                      onClick={() =>
                        toggleEdit(workoutIndex, exerciseIndex, "weight")
                      }
                    >
                      {editState.workoutIndex === workoutIndex &&
                      editState.exerciseIndex === exerciseIndex &&
                      editState.field === "weight" ? (
                        <Form.Control
                          type="text"
                          autoFocus
                          value={lastPerformance.weight || ""}
                          onChange={(e) =>
                            handleUpdateExercise(
                              workoutIndex,
                              exerciseIndex,
                              "weight",
                              e.target.value,
                            )
                          }
                          onBlur={() =>
                            saveExerciseUpdate(workoutIndex, exerciseIndex)
                          }
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        lastPerformance.weight
                      )}
                    </td>
                    <td
                      onClick={() =>
                        toggleEdit(workoutIndex, exerciseIndex, "reps")
                      }
                    >
                      {editState.workoutIndex === workoutIndex &&
                      editState.exerciseIndex === exerciseIndex &&
                      editState.field === "reps" ? (
                        <Form.Control
                          type="text"
                          autoFocus
                          value={lastPerformance.reps || ""}
                          onChange={(e) =>
                            handleUpdateExercise(
                              workoutIndex,
                              exerciseIndex,
                              "reps",
                              e.target.value,
                            )
                          }
                          onBlur={() =>
                            saveExerciseUpdate(workoutIndex, exerciseIndex)
                          }
                          onKeyDown={handleKeyDown}
                        />
                      ) : (
                        lastPerformance.reps
                      )}
                    </td>
                  </tr>
                );
              })}
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
