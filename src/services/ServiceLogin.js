import api from './api';

export const authenticate = async (username, password) => {
  const response = await api.post('/login', {
    username,
    password,
  });
  const { token, ...userData } = response.data;
  return { token, userData };
};