import axios from "axios";

const baseUrl = "/api/consultations";

const consultationService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
  create: async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  },
};

export default consultationService;
