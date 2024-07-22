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
import ChartDataLabels from "chartjs-plugin-datalabels";
import workoutService from "../services/workout";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const COLORS = [
  "rgba(75,192,192,1)",
  "rgba(192,75,75,1)",
  "rgba(75,192,75,1)",
  "rgba(192,192,75,1)",
  "rgba(75,75,192,1)",
  "rgba(192,75,192,1)",
  "rgba(75,75,75,1)",
  "rgba(192,192,192,1)",
];

const ProgressGraph = ({ userId }) => {
  const [chartDataList, setChartDataList] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workouts = await workoutService.get(userId);
        const data = processWorkoutData(workouts);
        setChartDataList(data);
      } catch (error) {
        console.error("Error fetching workout data", error);
      }
    };

    fetchWorkouts();
  }, [userId]);

  const processWorkoutData = (workouts) => {
    return workouts.map((workout, workoutIndex) => {
      const exercisesMap = new Map();

      workout.exercises.forEach((exercise) => {
        const { title } = exercise.exerciseId;
        if (!exercisesMap.has(title)) {
          exercisesMap.set(title, { weights: [], reps: [], dates: [] });
        }
        exercise.performance.forEach((performance) => {
          const weight = performance.weight;
          const reps = performance.reps;
          const date = new Date(performance.date).toLocaleDateString();
          if (weight != null && reps != null) {
            exercisesMap.get(title).weights.push(weight);
            exercisesMap.get(title).reps.push(reps);
            exercisesMap.get(title).dates.push(date);
          }
        });
      });

      const combinedDatasets = Array.from(exercisesMap.entries()).map(
        ([title, data], index) => ({
          label: title,
          data: data.dates.map((date, index) => ({
            x: date,
            y: data.weights[index],
            reps: data.reps[index],
          })),
          fill: false,
          borderColor: COLORS[index % COLORS.length], // Assign a color from the array
          tension: 0.1,
          backgroundColor: COLORS[index % COLORS.length], // Assign a color from the array
          borderWidth: 1,
        }),
      );

      return {
        workoutIndex,
        labels:
          exercisesMap.size > 0 ? exercisesMap.values().next().value.dates : [],
        datasets: combinedDatasets,
        title: `Workout ${workoutIndex + 1}`,
      };
    });
  };

  return (
    <div>
      <h2>Progress Graphs</h2>
      {chartDataList.length > 0 ? (
        chartDataList.map((chartData, index) => (
          <div key={index}>
            <h3>{chartData.title}</h3>
            <Line
              data={{
                labels: chartData.labels,
                datasets: chartData.datasets,
              }}
              options={{
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
                  datalabels: {
                    align: "end",
                    anchor: "end",
                    formatter: (value, context) => {
                      const { reps } = value;
                      return `Reps: ${reps}`;
                    },
                    color: "rgba(192,75,75,1)",
                    font: {
                      weight: "bold",
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const label = context.dataset.label || "";
                        const weight = context.parsed.y;
                        const reps = context.raw.reps;
                        return `${label}: Weight: ${weight}kg, Reps: ${reps}`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ProgressGraph;
