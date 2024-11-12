import { useState, useContext } from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login, error } = useContext(AuthContext); //  función login del contexto
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password); // Llama a login con los datos del formulario
    } catch (err) {
      console.error('Error al iniciar sesión:', err.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Sign In
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Please fill your information below
      </Typography>

      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      <TextField
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: <EmailIcon color="action" sx={{ marginRight: 1 }} />,
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      <TextField
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: <LockIcon color="action" sx={{ marginRight: 1 }} />,
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          borderRadius: '10px',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
        fullWidth
      >
        Next
      </Button>

      <Box display="flex" justifyContent="center">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            color: 'black',
            cursor: 'pointer',
            '&:hover': { color: '#535bf2' },
            textDecoration: 'underline',
            transition: 'color 0.3s ease',
          }}
          onClick={() => navigate('/signup')}
        >
          Create an account
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
