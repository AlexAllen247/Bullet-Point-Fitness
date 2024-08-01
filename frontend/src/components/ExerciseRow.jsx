import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  EXERCISE: "exercise",
};

const ExerciseRow = ({
  exercise,
  exerciseIndex,
  workoutIndex,
  moveExercise,
  handleSaveExerciseUpdate,
  handleExerciseClick,
  calculateGuidance,
  columnStyle,
  isReorganizing,
}) => {
  const [isDragging, setIsDragging] = useState(false);
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

  const [, ref] = useDrag({
    type: ItemTypes.EXERCISE,
    item: { exerciseIndex },
    canDrag: isReorganizing,
  });

  const [, drop] = useDrop({
    accept: ItemTypes.EXERCISE,
    hover: (draggedItem) => {
      if (draggedItem.exerciseIndex !== exerciseIndex) {
        moveExercise(workoutIndex, draggedItem.exerciseIndex, exerciseIndex);
        draggedItem.exerciseIndex = exerciseIndex;
      }
    },
    canDrop: () => isReorganizing,
  });

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

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  };

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
    if (!isDragging) {
      handleExerciseClick(exercise.exerciseId.embedUrl);
    }
  };

  return (
    <tr
      ref={(node) => {
        ref(drop(node));
        rowRef.current = node;
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: isReorganizing ? "move" : "pointer" }}
    >
      <td style={columnStyle} onClick={handleClick}>
        {exercise.exerciseId.title}
      </td>
      <td style={columnStyle} onClick={() => setIsEditing(true)}>
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
      <td style={columnStyle} onClick={() => setIsEditing(true)}>
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
      <td style={columnStyle}>
        {isEditing ? (
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </td>
      <td style={columnStyle}>{guidance}</td>
    </tr>
  );
};

export default ExerciseRow;
