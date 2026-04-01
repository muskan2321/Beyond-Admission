import axios from "axios";

const api = axios.create({
  baseURL: "https://api.beyondadmissions.in/api/",
  headers: {
    Accept: "application/json",
  },
});

export default api;
