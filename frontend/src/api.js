import axios from "axios";

const API = axios.create({
  baseURL: "https://timecapsule-backend-ucbu.onrender.com/api/"
});

// attach token automatically (for future requests)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;