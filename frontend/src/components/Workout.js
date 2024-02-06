import React, { useState, useEffect } from "react";
import workoutService from "../services/workout";

const Workout = ({ userId }) => {
  const [workouts, setWorkouts] = useState([]);

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

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.map((workout, index) => (
        <div key={index}>
          <h3>Workout {index + 1}</h3>
          <ul>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>
                <h4>{exercise.exerciseId.title}</h4>
                <p>{exercise.exerciseId.description}</p>
                <p>Duration: {exercise.exerciseId.duration}</p>
                <p>Muscle Targeted: {exercise.exerciseId.muscleName}</p>
                <a
                  href={exercise.exerciseId.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Workout;
