import React, { useState, useEffect } from "react";
import workoutService from "../services/workout";

const InactiveWorkouts = ({ userId, notify }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchInactiveWorkouts = async () => {
      try {
        const fetchedWorkouts = await workoutService.getInactive(userId);
        setWorkouts(
          Array.isArray(fetchedWorkouts) ? fetchedWorkouts : [fetchedWorkouts],
        );
      } catch (error) {
        console.error("Error fetching inactive workouts", error);
        notify("Failed to fetch inactive workouts: " + error.message, "error");
      }
    };

    if (userId) {
      fetchInactiveWorkouts();
    }
  }, [userId, notify]);

  const tableStyle = {
    tableLayout: "fixed",
    width: "100%",
  };

  const columnStyle = {
    width: "33.33%",
  };

  return (
    <div>
      <h2>Inactive Workouts</h2>
      {workouts.length === 0 ? (
        <p>No inactive workouts found.</p>
      ) : (
        workouts.map((workout, workoutIndex) => (
          <div key={workout._id}>
            <h3>Workout {workoutIndex + 1}</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={columnStyle}>Name of Exercise</th>
                  <th style={columnStyle}>Weight</th>
                  <th style={columnStyle}>Reps</th>
                </tr>
              </thead>
              <tbody>
                {workout.exercises.map((exercise, exerciseIndex) => {
                  const lastPerformance = exercise.performance.length
                    ? exercise.performance[exercise.performance.length - 1]
                    : { weight: "Set weight", reps: "Set reps" };
                  return (
                    <tr key={exerciseIndex}>
                      <td style={columnStyle}>{exercise.exerciseId.title}</td>
                      <td style={columnStyle}>{lastPerformance.weight}</td>
                      <td style={columnStyle}>{lastPerformance.reps}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default InactiveWorkouts;
