/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../services/serviceLogin';
import { signup as signupService } from '../services/serviceSignup';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    return savedUser || null;
  });

  const [token, setToken] = useState(
    () => localStorage.getItem('token') || null
  );
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { token, userData } = await authenticate(email, password);

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
    userName,
    firstName,
    lastName,
    email,
    password,
    birthDate
  ) => {
    try {
      const { access_token } = await signupService(
        userName,
        firstName,
        lastName,
        email,
        password,
        birthDate
      );

      if (!access_token) {
        throw new Error('Error en el registro. Intente de nuevo.');
      }

      setToken(access_token);
      localStorage.setItem('token', access_token);

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
    <AuthContext.Provider value={{ user, token, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}
