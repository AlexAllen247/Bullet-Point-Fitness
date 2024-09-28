import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import workoutService from "../services/workout";
import { Container, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
);

const generateColorPalette = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = (i * 360) / numColors;
    colors.push(`hsl(${hue}, 70%, 50%)`);
  }
  return colors;
};

const processWorkoutData = (workouts) => {
  return workouts.map((workout) => {
    const exercisesMap = new Map();

    workout.exercises.forEach((exercise) => {
      const { title } = exercise.exerciseId;
      if (!exercisesMap.has(title)) {
        exercisesMap.set(title, {
          weights: new Map(),
          reps: new Map(),
          dates: [],
        });
      }

      exercise.performance.forEach((performance) => {
        if (performance.weight && performance.reps && performance.date) {
          const formattedDate = new Date(performance.date).toLocaleDateString(
            "en-US",
          );

          if (!exercisesMap.get(title).weights.has(formattedDate)) {
            exercisesMap
              .get(title)
              .weights.set(formattedDate, performance.weight);
            exercisesMap.get(title).reps.set(formattedDate, performance.reps);
            exercisesMap.get(title).dates.push(formattedDate);
          }
        }
      });
    });

    const numExercises = exercisesMap.size;
    const colorPalette = generateColorPalette(numExercises);

    const datasets = Array.from(exercisesMap.entries()).map(
      ([title, data], index) => ({
        label: title,
        data: data.dates.map((date) => ({
          x: date,
          y: data.weights.get(date),
          reps: data.reps.get(date),
        })),
        fill: false,
        borderColor: colorPalette[index % numExercises],
        tension: 0.1,
      }),
    );

    return {
      labels:
        exercisesMap.size > 0 ? exercisesMap.values().next().value.dates : [],
      datasets,
    };
  });
};

const InactiveProgressGraph = ({ userId }) => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const fetchInactiveWorkouts = async () => {
      try {
        const workouts = await workoutService.getInactive(userId);
        const data = processWorkoutData(workouts);
        setWorkoutData(data);
      } catch (error) {
        console.error("Error fetching inactive workout data", error);
      }
    };

    fetchInactiveWorkouts();
  }, [userId]);

  const chartContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    marginBottom: "20px",
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "logarithmic",
        position: "left",
        title: {
          display: true,
          text: "Weight (kg)",
        },
        ticks: {
          callback: function (value, index, values) {
            return Number(value.toString());
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y} kg, ${context.raw.reps} reps`;
            }
            return label;
          },
        },
      },
    },
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
  };

  return (
    <Container>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 style={styles.header}>Previous Progress Graphs</h1>
      {workoutData.length > 0 ? (
        workoutData.map((data, index) => (
          <Card
            key={index}
            className="my-3"
            style={styles.card}
            border="danger"
          >
            <Card.Body>
              <h3 style={styles.header}>Workout {index + 1}</h3>
              <div style={chartContainerStyle}>
                <Line data={data} options={options} />
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </Container>
  );
};

export default InactiveProgressGraph;
