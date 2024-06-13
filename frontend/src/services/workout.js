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
};

export default workoutService;
