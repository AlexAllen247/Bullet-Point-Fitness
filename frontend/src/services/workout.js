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
    try {
      const response = await axios.put(updateUrl, updates, config());
      return response.data;
    } catch (error) {
      console.error(
        "Failed to update exercise:",
        error.response || error.message,
      );
      throw error;
    }
  },
};

export default workoutService;
