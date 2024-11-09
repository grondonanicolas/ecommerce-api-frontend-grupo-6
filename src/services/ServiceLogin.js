import api from './api';

export const authenticate = async (userName, password) => {
  const response = await api.post("http://localhost:8080/login", {
    userName,
    password,
  });
  const { token, ...userData } = response.data;
  return { token, userData };
};