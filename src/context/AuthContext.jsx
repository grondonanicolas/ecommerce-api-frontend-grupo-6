/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../services/serviceLogin';
import { signup as signupService } from '../services/serviceSignup';

export function AuthContext({ children }) {
  const Context = createContext();
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    return savedUser || null;
  });

  const [token, setToken] = useState(
    () => localStorage.getItem('token') || null
  );

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const { token, userData } = await authenticate(username, password);

      setUser(userData);
      setToken(token);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);

      navigate('/home');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Credenciales incorrectas');
    }
  };

  const signup = async (
    username,
    firstName,
    lastName,
    email,
    password,
    birthdate
  ) => {
    try {
      const { token, userData } = await signupService(
        username,
        firstName,
        lastName,
        email,
        password,
        birthdate
      );

      setUser(userData);
      setToken(token);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);

      navigate('/home');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error en el registro. Intente de nuevo.');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    setError(null);
  }, [user]);

  return (
    <Context.Provider value={{ user, token, login, signup, logout, error }}>
      {children}
    </Context.Provider>
  );
}

export default AuthContext;
