import axios from "axios";

const baseUrl = "/api/mindsetvideos";

const mindsetVideoService = {
  get: () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  },
};

export default mindsetVideoService;
