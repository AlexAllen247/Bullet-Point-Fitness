import axios from "axios";

const baseUrl = "/api/organs";

const organService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default organService;
