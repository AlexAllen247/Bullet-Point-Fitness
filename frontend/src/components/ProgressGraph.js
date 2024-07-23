import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import workoutService from "../services/workout";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const processWorkoutData = (workouts) => {
  return workouts.map((workout) => {
    const exercisesMap = new Map();

    workout.exercises.forEach((exercise) => {
      const { title } = exercise.exerciseId;
      if (!exercisesMap.has(title)) {
        exercisesMap.set(title, { weights: [], reps: [], dates: [] });
      }
      exercise.performance.forEach((performance) => {
        if (performance.weight && performance.reps && performance.date) {
          const formattedDate = new Date(performance.date).toLocaleDateString("en-US");
          exercisesMap.get(title).weights.push(performance.weight);
          exercisesMap.get(title).reps.push(performance.reps);
          exercisesMap.get(title).dates.push(formattedDate);
        }
      });
    });

    const datasets = Array.from(exercisesMap.entries()).map(
      ([title, data]) => ({
        label: title,
        data: data.weights.map((weight, index) => ({
          x: data.dates[index],
          y: weight,
          reps: data.reps[index],
        })),
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1,
      })
    );

    return {
      labels: exercisesMap.size > 0 ? exercisesMap.values().next().value.dates : [],
      datasets,
    };
  });
};

const ProgressGraph = ({ userId }) => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workouts = await workoutService.get(userId);
        const data = processWorkoutData(workouts);
        setWorkoutData(data);
      } catch (error) {
        console.error("Error fetching workout data", error);
      }
    };

    fetchWorkouts();
  }, [userId]);

  const chartContainerStyle = {
    position: "relative",
    width: "100%",
    height: "400px",
    marginBottom: "20px",
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        title: {
          display: true,
          text: "Weight (kg)",
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

  return (
    <div>
      <h2>Progress Graphs</h2>
      {workoutData.length > 0 ? (
        workoutData.map((data, index) => (
          <div key={index} style={chartContainerStyle}>
            <h3>Workout {index + 1}</h3>
            <Line data={data} options={options} />
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ProgressGraph;
