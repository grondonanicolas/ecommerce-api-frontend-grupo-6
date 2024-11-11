import api from './api';

export const authenticate = async (email, password) => {
  const response = await api.post("http://localhost:8080/login", {
    email,
    password,
  });
  const token = response.data.access_token
  return { token };
};