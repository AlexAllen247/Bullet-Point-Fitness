import axios from "axios";

const baseUrl = "/api/pdf";

const pdfService = {
  get: async (fileName) => {
    const request = axios.get(`${baseUrl}/${fileName}`, {
      responseType: "blob",
    });
    return request.then((response) => response.data);
  },
  create: async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  },
};

export default pdfService;
