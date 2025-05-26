import axios from 'axios';
import env from "../config/env";

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  maxBodyLength : Infinity,
  insecureHTTPParser: true,
  httpAgent: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionado token de autenticação a cada requisição
axiosInstance.interceptors.request.use(
  (config) => {
    const BearToken = env.BEAR_TOKEN
    if (BearToken) {
      config.headers.Authorization = `Bearer ${BearToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;