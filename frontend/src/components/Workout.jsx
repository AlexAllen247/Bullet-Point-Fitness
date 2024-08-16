import React, { useState, useEffect } from "react";
import { Table, Button, Container, Card } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import workoutService from "../services/workout";
import ExerciseRow from "./ExerciseRow";
import ExerciseModal from "./ExerciseModal";

const calculateProgressionPlan = (currentReps, currentWeight) => {
  currentReps = Number(currentReps);
  currentWeight = Number(currentWeight);

  if (!currentReps || !currentWeight) {
    return {};
  }

  let increment = 2.5;

  if (currentWeight <= 10) {
    increment = 1;
  } else if (currentWeight <= 20) {
    increment = 2;
  } else {
    increment = 2.5;
  }

  let progressionOptions = {};

  if (currentReps >= 6) {
    const newWeight = currentWeight + increment;
    progressionOptions[`Increase weight to`] = `${newWeight} kg`;
  } else {
    const newReps = currentReps + 1;
    progressionOptions[`Increase reps to`] = `${newReps}`;
  }

  return progressionOptions;
};

const isTouchDevice = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

const Workout = ({ userId }) => {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [isReorganizing, setIsReorganizing] = useState(false);
  const [selectedExerciseTitle, setSelectedExerciseTitle] = useState("");

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

  const handleExerciseClick = (embedUrl, title) => {
    setSelectedVideoUrl(embedUrl);
    setSelectedExerciseTitle(title);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveExerciseUpdate = async (
    workoutIndex,
    exerciseIndex,
    performance,
  ) => {
    const workout = workouts[workoutIndex];
    const exercise = workout.exercises[exerciseIndex];
    performance.date = new Date();

    try {
      await workoutService.updateExercise(
        workout._id,
        exercise.exerciseId.id,
        performance,
      );

      const updatedWorkouts = [...workouts];
      updatedWorkouts[workoutIndex].exercises[exerciseIndex].performance.push(
        performance,
      );
      setWorkouts(updatedWorkouts);
      console.log("Exercise updated successfully!");
    } catch (error) {
      console.error("Failed to update exercise", error);
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

  const moveExercise = (workoutIndex, fromIndex, toIndex) => {
    const updatedWorkouts = [...workouts];
    const [movedExercise] = updatedWorkouts[workoutIndex].exercises.splice(
      fromIndex,
      1,
    );
    updatedWorkouts[workoutIndex].exercises.splice(toIndex, 0, movedExercise);
    setWorkouts(updatedWorkouts);

    saveOrderToBackend(
      updatedWorkouts[workoutIndex]._id,
      updatedWorkouts[workoutIndex].exercises,
    );
  };

  const saveOrderToBackend = async (workoutId, exercises) => {
    try {
      await workoutService.updateOrder(workoutId, exercises);
      console.log("Order saved successfully!");
    } catch (error) {
      console.error("Failed to save order", error);
    }
  };

  const styles = {
    card: {
      textAlign: "center",
      color: "#df0000",
      borderWidth: "2px",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
      textAlign: "center",
    },
    button: {
      padding: 15,
      marginTop: 35,
      marginBottom: 35,
    },
    table: {
      tableLayout: "fixed",
      width: "100%",
      wordWrap: "break-word",
    },
    column: {
      width: "33.33%",
      overflow: "hidden",
      textAlign: "left",
      wordWrap: "break-word",
      whiteSpace: "normal",
      color: "#df0000",
    },
    instructions: {
      textAlign: "left",
      marginBottom: "20px",
    },
  };

  const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <Container>
      <h1 style={styles.header}>Your Workouts</h1>
      <Card className="my-3" style={styles.card} border="danger">
        <Card.Body>
          <div style={styles.instructions}>
            <h3>Instructions</h3>
            <p>
              Welcome to the workout tracker! Follow these steps for an
              effective workout:
            </p>
            <ul>
              <li>Log your weight and reps for each exercise.</li>
              <li>Follow the guidance provided for progressive overload.</li>
              <li>Click on an exercise name to watch the demo video.</li>
              <li>
                Update your performance regularly to track progress accurately.
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
      {workouts.map((workout, workoutIndex) => (
        <Card
          key={workoutIndex}
          className="my-3"
          style={styles.card}
          border="danger"
        >
          <Card.Body>
            <h3 style={styles.header}>Workout {workoutIndex + 1}</h3>
            <Button
              variant="danger"
              aria-label="Reorganise exercise order"
              className="btn-custom"
              style={styles.button}
              onClick={() => setIsReorganizing(!isReorganizing)}
            >
              {isReorganizing ? "Finish Reordering" : "Reorder Exercises"}
            </Button>
            <DndProvider backend={Backend}>
              <div className="table-responsive">
                <Table striped bordered hover style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.column}>Name of Exercise</th>
                      <th style={styles.column}>Weight</th>
                      <th style={styles.column}>Reps</th>
                      <th style={styles.column}>Save</th>
                      <th style={styles.column}>Guidance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workout.exercises.map((exercise, exerciseIndex) => (
                      <ExerciseRow
                        key={exerciseIndex}
                        exercise={exercise}
                        exerciseIndex={exerciseIndex}
                        workoutIndex={workoutIndex}
                        moveExercise={moveExercise}
                        handleSaveExerciseUpdate={handleSaveExerciseUpdate}
                        handleExerciseClick={() =>
                          handleExerciseClick(
                            exercise.exerciseId.embedUrl,
                            exercise.exerciseId.title,
                          )
                        }
                        calculateGuidance={calculateGuidance}
                        columnStyle={styles.column}
                        isReorganizing={isReorganizing}
                      />
                    ))}
                  </tbody>
                </Table>
              </div>
            </DndProvider>
          </Card.Body>
        </Card>
      ))}
      <ExerciseModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedVideoUrl={selectedVideoUrl}
        selectedExerciseTitle={selectedExerciseTitle}
      />
    </Container>
  );
};

export default Workout;
