import axios from "axios";
import userService from "./user";

const baseUrl = "/api/workouts";

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`,
    },
  };
};

const workoutService = {
  get: async (userId) => {
    const userSpecificUrl = `${baseUrl}/user/${userId}`;
    const response = await axios.get(userSpecificUrl, config());
    return response.data;
  },
  updateExercise: async (workoutId, exerciseId, updates) => {
    const updateUrl = `${baseUrl}/workout/${workoutId}/exercise/${exerciseId}`;
    const response = await axios.put(updateUrl, updates, config());
    return response.data;
  },
  getInactive: async (userId) => {
    const userSpecificUrl = `${baseUrl}/inactive/${userId}`;
    const response = await axios.get(userSpecificUrl, config());
    return response.data;
  },
  updateOrder: async (workoutId, exercises) => {
    const updateUrl = `${baseUrl}/workout/${workoutId}/order`;
    const response = await axios.put(
      updateUrl,
      {
        exercises: exercises.map((exercise) => ({
          exerciseId: exercise.exerciseId._id || exercise.exerciseId, // Ensure exerciseId is just the ID
          performance: exercise.performance || [],
        })),
      },
      config(),
    );
    return response.data;
  },
};

export default workoutService;
