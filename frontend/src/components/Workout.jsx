import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
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

  const handleSaveExerciseUpdate = async (
    workoutIndex,
    exerciseIndex,
    performance,
  ) => {
    const workout = workouts[workoutIndex];
    const exercise = workout.exercises[exerciseIndex];
    performance.date = new Date(); // Add the current date to performance

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

  const tableStyle = {
    tableLayout: "fixed",
    width: "100%",
  };

  const columnStyle = {
    width: "33.33%",
    overflow: "hidden",
  };

  const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <div>
      <h2>Your Workouts</h2>
      <div>
        <h3>Instructions</h3>
        <p>
          Welcome to the workout tracker! Follow these steps for an effective
          workout:
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
      {workouts.map((workout, workoutIndex) => (
        <div key={workoutIndex}>
          <h3>Workout {workoutIndex + 1}</h3>
          <Button
            variant="primary"
            onClick={() => setIsReorganizing(!isReorganizing)}
          >
            {isReorganizing ? "Finish Reordering" : "Reorder Exercises"}
          </Button>
          <DndProvider backend={Backend}>
            <Table striped bordered hover style={tableStyle}>
              <thead>
                <tr>
                  <th style={columnStyle}>Name of Exercise</th>
                  <th style={columnStyle}>Weight</th>
                  <th style={columnStyle}>Reps</th>
                  <th style={columnStyle}>Save</th>
                  <th style={columnStyle}>Guidance</th>
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
                    handleExerciseClick={handleExerciseClick}
                    calculateGuidance={calculateGuidance}
                    columnStyle={columnStyle}
                    isReorganizing={isReorganizing}
                  />
                ))}
              </tbody>
            </Table>
          </DndProvider>
        </div>
      ))}
      <ExerciseModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedVideoUrl={selectedVideoUrl}
      />
    </div>
  );
};

export default Workout;
