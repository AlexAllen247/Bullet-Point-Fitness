import axios from "axios";
import userService from "./user";

const baseUrl = "/api/clientinfo";

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`,
    },
  };
};

const clientInfoFormService = {
  create: async (newObject) => {
    const response = await axios.post(baseUrl, newObject, config());
    return response.data;
  },
};

export default clientInfoFormService;
