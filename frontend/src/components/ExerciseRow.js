import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  EXERCISE: "exercise",
};

const ExerciseRow = ({
  exercise,
  exerciseIndex,
  workoutIndex,
  moveExercise,
  editState,
  toggleEdit,
  handleUpdateExercise,
  saveExerciseUpdate,
  handleKeyDown,
  handleExerciseClick,
  calculateGuidance,
  columnStyle,
  isReorganizing,
}) => {
  const [isDragging, setIsDragging] = useState(false);

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

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  };

  const handleClick = () => {
    if (!isDragging) {
      handleExerciseClick(exercise.exerciseId.embedUrl);
    }
  };

  return (
    <tr
      ref={(node) => ref(drop(node))}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      style={{ cursor: isReorganizing ? "move" : "pointer" }}
    >
      <td style={columnStyle}>{exercise.exerciseId.title}</td>
      <td
        onClick={() => toggleEdit(workoutIndex, exerciseIndex, "weight")}
        style={columnStyle}
      >
        {editState.workoutIndex === workoutIndex &&
        editState.exerciseIndex === exerciseIndex &&
        editState.field === "weight" ? (
          <Form.Control
            type="number"
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
            onBlur={() => saveExerciseUpdate(workoutIndex, exerciseIndex)}
            onKeyDown={(e) =>
              handleKeyDown(e, workoutIndex, exerciseIndex, "weight")
            }
          />
        ) : (
          <span
            onClick={() => toggleEdit(workoutIndex, exerciseIndex, "weight")}
          >
            {lastPerformance.weight}
          </span>
        )}
      </td>
      <td
        onClick={() => toggleEdit(workoutIndex, exerciseIndex, "reps")}
        style={columnStyle}
      >
        {editState.workoutIndex === workoutIndex &&
        editState.exerciseIndex === exerciseIndex &&
        editState.field === "reps" ? (
          <Form.Control
            type="number"
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
            onBlur={() => saveExerciseUpdate(workoutIndex, exerciseIndex)}
            onKeyDown={(e) =>
              handleKeyDown(e, workoutIndex, exerciseIndex, "reps")
            }
          />
        ) : (
          <span onClick={() => toggleEdit(workoutIndex, exerciseIndex, "reps")}>
            {lastPerformance.reps}
          </span>
        )}
      </td>
      <td style={columnStyle}>{guidance}</td>
    </tr>
  );
};

export default ExerciseRow;
