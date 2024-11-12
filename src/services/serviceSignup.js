import api from './api';

export const signup = async (
  userName,
  firstName,
  lastName,
  email,
  password,
  birthDate,
  image,
  role
) => {
  const response = await api.post('http://localhost:8080/register', {
    userName,
    firstName,
    lastName,
    email,
    password,
    birthDate,
    image,
    role
  });

  return response.data;
};
