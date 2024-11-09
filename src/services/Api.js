import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tu-backend-api.com', // Cambia esto a la URL de tu backend
});

// Interceptor para incluir el token en cada solicitud
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;