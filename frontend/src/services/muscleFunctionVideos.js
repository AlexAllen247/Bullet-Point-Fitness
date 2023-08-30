import axios from "axios";

const baseUrl = "/api/musclefunctionvideos";

const muscleFunctionVideoService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default muscleFunctionVideoService;
