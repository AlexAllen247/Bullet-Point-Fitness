import axios from "axios";

const baseUrl = "/api/exercisevideos";

const exerciseVideoService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default exerciseVideoService;
