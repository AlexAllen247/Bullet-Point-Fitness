import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const ExerciseRow = ({
  exercise,
  exerciseIndex,
  workoutIndex,
  handleSaveExerciseUpdate,
  handleExerciseClick,
  calculateGuidance,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempWeight, setTempWeight] = useState("");
  const [tempReps, setTempReps] = useState("");
  const rowRef = useRef(null);

  const lastPerformance = exercise.performance.length
    ? exercise.performance[exercise.performance.length - 1]
    : { weight: "", reps: "" };
  const guidance = calculateGuidance(
    lastPerformance.reps,
    lastPerformance.weight,
  );

  useEffect(() => {
    if (isEditing) {
      setTempWeight(lastPerformance.weight);
      setTempReps(lastPerformance.reps);
    }
  }, [isEditing, lastPerformance.weight, lastPerformance.reps]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rowRef.current && !rowRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tempWeight && tempReps) {
      handleSaveExerciseUpdate(workoutIndex, exerciseIndex, {
        weight: tempWeight,
        reps: tempReps,
      });
      setIsEditing(false);
    } else {
      alert("Please enter both weight and reps");
    }
  };

  const handleClick = () => {
    handleExerciseClick(exercise.exerciseId.embedUrl);
  };

  return (
    <tr ref={rowRef} style={{ cursor: "pointer" }}>
      <td onClick={handleClick}>{exercise.exerciseId.title}</td>
      <td onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <Form.Control
            type="number"
            value={tempWeight}
            onChange={(e) => setTempWeight(e.target.value)}
          />
        ) : (
          lastPerformance.weight
        )}
      </td>
      <td onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <Form.Control
            type="number"
            value={tempReps}
            onChange={(e) => setTempReps(e.target.value)}
          />
        ) : (
          lastPerformance.reps
        )}
      </td>
      <td>
        {isEditing ? (
          <Button
            variant="primary"
            aria-label="Edit"
            className="btn-custom"
            onClick={handleSubmit}
          >
            Save
          </Button>
        ) : (
          <Button
            variant="danger"
            aria-label="Update"
            className="btn-custom"
            onClick={() => setIsEditing(true)}
          >
            Update
          </Button>
        )}
      </td>
      <td>{guidance}</td>
    </tr>
  );
};

export default ExerciseRow;
