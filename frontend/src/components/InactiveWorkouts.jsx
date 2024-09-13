import React, { useState, useEffect } from "react";
import { Container, Card, Table } from "react-bootstrap";
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
    table: {
      tableLayout: "fixed",
      width: "100%",
      wordWrap: "break-word",
    },
    column: {
      width: "33.33%",
      overflow: "hidden",
      textAlign: "center",
      wordWrap: "break-word",
      whiteSpace: "normal",
      color: "#df0000",
    },
  };

  return (
    <Container>
      <h1 style={styles.header}>Previous Workouts</h1>
      {workouts.map((workout, workoutIndex) => (
        <Card
          key={workout._id}
          className="my-3"
          style={styles.card}
          border="danger"
        >
          <Card.Body>
            <h3 style={styles.header}>Workout {workoutIndex + 1}</h3>
            <div className="table-responsive">
              <Table striped bordered hover style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.column}>Name of Exercise</th>
                    <th style={styles.column}>Weight</th>
                    <th style={styles.column}>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  {workout.exercises.map((exercise, exerciseIndex) => {
                    const lastPerformance = exercise.performance.length
                      ? exercise.performance[exercise.performance.length - 1]
                      : { weight: "Set weight", reps: "Set reps" };
                    return (
                      <tr key={exerciseIndex}>
                        <td style={styles.column}>
                          {exercise.exerciseId.title}
                        </td>
                        <td style={styles.column}>{lastPerformance.weight}</td>
                        <td style={styles.column}>{lastPerformance.reps}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default InactiveWorkouts;
