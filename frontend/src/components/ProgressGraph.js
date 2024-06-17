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

const ProgressGraph = ({ userId }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workouts = await workoutService.get(userId);
        const data = processWorkoutData(workouts);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching workout data", error);
      }
    };

    fetchWorkouts();
  }, [userId]);

  const processWorkoutData = (workouts) => {
    const exercisesMap = new Map();

    workouts.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        const { title } = exercise.exerciseId;
        if (!exercisesMap.has(title)) {
          exercisesMap.set(title, { weights: [], reps: [], dates: [] });
        }
        exercise.performance.forEach((performance) => {
          exercisesMap.get(title).weights.push(performance.weight);
          exercisesMap.get(title).reps.push(performance.reps);
          exercisesMap
            .get(title)
            .dates.push(new Date(performance.date).toLocaleDateString());
        });
      });
    });

    const weightsDatasets = Array.from(exercisesMap.entries()).map(
      ([title, data]) => ({
        label: `${title} (Weight)`,
        data: data.weights,
        yAxisID: "y1",
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      }),
    );

    const repsDatasets = Array.from(exercisesMap.entries()).map(
      ([title, data]) => ({
        label: `${title} (Reps)`,
        data: data.reps,
        yAxisID: "y2",
        fill: false,
        borderColor: "rgba(192,75,75,1)",
        tension: 0.1,
      }),
    );

    return {
      labels:
        exercisesMap.size > 0 ? exercisesMap.values().next().value.dates : [],
      datasets: [...weightsDatasets, ...repsDatasets],
    };
  };

  return (
    <div>
      <h2>Progress Graph</h2>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            scales: {
              y1: {
                type: "linear",
                position: "left",
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Weight (kg)",
                },
              },
              y2: {
                type: "linear",
                position: "right",
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Reps",
                },
                grid: {
                  drawOnChartArea: false,
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
            },
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ProgressGraph;
