import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import workoutService from "../services/workout";

const calculateProgressionPlan = (currentReps, currentWeight) => {
  currentReps = Number(currentReps);
  currentWeight = Number(currentWeight);

  if (!currentReps || !currentWeight) {
    return {};
  }

  let progressionOptions = {};

  if (currentReps >= 6) {
    const smallestIncrement = 2.5;
    const newWeight = currentWeight + smallestIncrement;
    progressionOptions[`Increase weight to`] = `${newWeight} kg`;
  } else {
    const newReps = currentReps + 1;
    progressionOptions[`Increase reps to`] = `${newReps}`;
  }

  return progressionOptions;
};

const Workout = ({ userId, notify }) => {
  const [workouts, setWorkouts] = useState([]);
  const [editState, setEditState] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const fetchedWorkouts = await workoutService.get(userId);
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

  const calculateGuidance = (reps, weight) => {
    if (!reps || !weight) {
      return "";
    }
    const progressionPlan = calculateProgressionPlan(reps, weight);
    const keys = Object.keys(progressionPlan);
    if (keys.length > 0) {
      return `${keys[0]}: ${progressionPlan[keys[0]]}`;
    }
    return "No progression needed";
  };

  const tableStyle = {
    tableLayout: "fixed",
    width: "100%",
  };

  const columnStyle = {
    width: "33.33%",
  };

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.map((workout, workoutIndex) => (
        <div key={workoutIndex}>
          <h3>Workout {workoutIndex + 1}</h3>
          <Table striped bordered hover style={tableStyle}>
            <thead>
              <tr>
                <th style={columnStyle}>Name of Exercise</th>
                <th style={columnStyle}>Weight</th>
                <th style={columnStyle}>Reps</th>
                <th style={columnStyle}>Guidance</th>
              </tr>
            </thead>
            <tbody>
              {workout.exercises.map((exercise, exerciseIndex) => {
                const lastPerformance = exercise.performance.length
                  ? exercise.performance[exercise.performance.length - 1]
                  : { weight: "Set weight", reps: "Set reps" };
                const guidance = calculateGuidance(
                  lastPerformance.reps,
                  lastPerformance.weight,
                );
                return (
                  <tr key={exerciseIndex}>
                    <td
                      onClick={() =>
                        handleExerciseClick(exercise.exerciseId.embedUrl)
                      }
                      style={{ cursor: "pointer", ...columnStyle }}
                    >
                      {exercise.exerciseId.title}
                    </td>
                    <td
                      onClick={() =>
                        toggleEdit(workoutIndex, exerciseIndex, "weight")
                      }
                      style={columnStyle}
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
                      style={columnStyle}
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
                    <td style={columnStyle}>{guidance}</td>
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
