/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { authenticate } from '../services/serviceLogin';
import { signup as signupService } from '../services/serviceSignup';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    () => localStorage.getItem('token') || null
  );

  const [user, setUser] = useState(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      try {
        const decodedToken = jwtDecode(savedToken);
        return {
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
          role: decodedToken.role,
          image: decodedToken.image,
          isAdmin: decodedToken.role === 'ADMIN',
        };
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  });

  const [error, setError] = useState(null);

  const login = async ({ email, username, password }) => {
    try {
      const response = await authenticate({ email, username, password });
      const receivedToken = response.token;

      if (typeof receivedToken !== 'string') {
        console.error('Invalid token:', receivedToken);
        setError('Token inválido recibido del servidor.');
        return;
      }

      const decodedToken = jwtDecode(receivedToken);

      const userData = {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.email,
        role: decodedToken.role,
        image: decodedToken.image,
        isAdmin: decodedToken.role === 'ADMIN',
      };

      setUser(userData);
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      navigate('/');
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
    birthDate,
    image,
    role
  ) => {
    try {
      const response = await signupService(
        userName,
        firstName,
        lastName,
        email,
        password,
        birthDate,
        image,
        role
      );
      const receivedToken = response.access_token;

      if (!receivedToken) {
        throw new Error('Error en el registro. Intente de nuevo.');
      }

      const decodedToken = jwtDecode(receivedToken);

      const userData = {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.email,
        role: decodedToken.role,
        image: decodedToken.image,
        isAdmin: decodedToken.role === 'ADMIN',
      };

      setUser(userData);
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error en el registro. Intente de nuevo.');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
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
