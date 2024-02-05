import axios from "axios";
import userService from "./user";

const baseUrl = "/api/workouts/user";

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`,
    },
  };
};

const workoutService = {
  get: async (userId) => {
    const response = await axios.get(`${baseUrl}/${userId}`, config());
    return response.data;
  },
};

export default workoutService;
