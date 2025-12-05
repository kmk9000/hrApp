import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://hrapp-xe2s.onrender.com/employees",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
