import api from './Api';

export const signup = async (username, firstName, lastName, email, password, birthdate) => {
  const response = await api.post('/signup', {
    username,
    firstName,
    lastName,
    email,
    password,
    birthdate,
    role: 'USER' // Asegura que el rol es siempre USER
  });
  
  return response.data;
};