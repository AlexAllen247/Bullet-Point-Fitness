import axios from "axios";

const baseUrl = "/api/nutritionvideos";

const nutritionVideoService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default nutritionVideoService;
