import axios from "axios";

const baseUrl = "/api/trainingvideos";

const trainingVideoService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default trainingVideoService;
