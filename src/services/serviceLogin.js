import api from './api';

export const authenticate = async ({ email, username, password }) => {
  const payload = {
    email: email ? email : null,
    username: username ? username : null,
    password,
  };
  const response = await api.post('http://localhost:8080/login', payload);
  const token = response.data.access_token;
  return { token };
};
