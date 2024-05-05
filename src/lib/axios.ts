import axios from "axios";

const baseURL = process.env.API_URL;

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const access_token =
    localStorage.getItem("access_token") ??
    sessionStorage.getItem("access_token");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

export { api };
