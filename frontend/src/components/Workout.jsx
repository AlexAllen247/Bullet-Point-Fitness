import React, { useState, useEffect } from "react";
import { Table, Button, Container, Card } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import workoutService from "../services/workout";
import ExerciseRow from "./ExerciseRow";
import ExerciseModal from "./ExerciseModal";
import BulletPointSVG from "./BulletPointSVG";

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
    ul: {
      listStyleType: "none",
    },
  };

  const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <Container>
      <h1 style={styles.header}>Your Workouts</h1>
      <Card className="my-3" style={styles.card} border="danger">
        <Card.Body>
          <div style={styles.instructions}>
            <h3>Instructions for Programs</h3>
            <ul style={styles.ul}>
              <li>
                <BulletPointSVG /> Aim for 4-10 reps per set, with the ideal
                range being 5-8 reps.
              </li>
              <li>
                <BulletPointSVG /> Focus on increasing weight as the main goal.
                Use reps to adapt to the weight before moving up.
              </li>
              <li>
                <BulletPointSVG /> When increasing the weight, always use the
                smallest increment possible (e.g., 2.5 kg or smaller). Avoid
                large jumps.
              </li>
              <li>
                <BulletPointSVG /> Perform these sessions with at least one rest
                day between each. On rest days, you can do light aerobic
                activities like walking, cycling, swimming, rowing, or using the
                elliptical.
              </li>
              <li>
                <BulletPointSVG /> If you train three times a week, follow a
                Mon/Wed/Fri or Tues/Thurs/Sat schedule, or any combination that
                allows rest days.
              </li>
              <li>
                <BulletPointSVG /> For more frequent training, alternate
                training days like this:
                <ul style={styles.ul}>
                  <li>
                    <BulletPointSVG />
                    Week 1: Mon/Wed/Fri/Sun
                  </li>
                  <li>
                    <BulletPointSVG />
                    Week 2: Tues/Thurs/Sat
                  </li>
                  <li>
                    <BulletPointSVG />
                    Repeat.
                  </li>
                </ul>
              </li>
              <li>
                <BulletPointSVG /> For Stages 1 and 2, perform each workout once
                per week.
              </li>
              <li>
                <BulletPointSVG /> For Stage 3, follow the alternate day
                schedule.
              </li>
              <li>
                <BulletPointSVG /> Click on an exercise to view a demo video.
              </li>
              <li>
                <BulletPointSVG /> To warm up correctly:
                <ul style={styles.ul}>
                  <li>
                    <BulletPointSVG />
                    Perform a 10-minute aerobic exercise at 60% of your maximum
                    heart rate: (220 - your age) x 0.6.
                  </li>
                  <li>
                    <BulletPointSVG />
                    For the first exercise, perform warmup sets as follows:
                    <ul style={styles.ul}>
                      <li>
                        <BulletPointSVG />
                        50% of your working weight for 5 reps
                      </li>
                      <li>
                        <BulletPointSVG />
                        70% of your working weight for 2-3 reps
                      </li>
                      <li>
                        <BulletPointSVG />
                        85% of your working weight for 1-2 reps
                      </li>
                    </ul>
                  </li>
                  <li>
                    <BulletPointSVG />
                    Rest for 2 minutes before performing your working set.
                  </li>
                  <li>
                    <BulletPointSVG />
                    For the following exercises, you can use the 70% and 85%
                    warmup sets to minimize fatigue.
                  </li>
                </ul>
              </li>
              <li>
                <BulletPointSVG /> Each exercise includes one working set. Warm
                up appropriately and rest for 2 minutes before the main set.
                Focus on maximizing intensity.
              </li>
              <li>
                <BulletPointSVG /> If you can't perform an exercise due to lack
                of equipment, contact us to modify your program.
              </li>
              <li>
                <BulletPointSVG /> To change the order of exercises, click the
                "Re-order exercises" button, drag and drop the exercises, and
                then save.
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
