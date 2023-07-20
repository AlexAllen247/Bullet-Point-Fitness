import axios from "axios";

const baseUrl = "/api/contactforms";

const contactFormService = {
  create: async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  },
};

export default contactFormService;
