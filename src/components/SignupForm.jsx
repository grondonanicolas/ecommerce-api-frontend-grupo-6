import { useState, useContext } from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CakeIcon from '@mui/icons-material/Cake';
import AuthContext from '../context/AuthContext';

const SignupForm = () => {
  const { signup, error } = useContext(AuthContext); // Usa la función signup del contexto
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
  });
  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    try {
      // Llama a la función signup de AuthContext
      await signup(
        formData.username,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        formData.birthdate
      );
    } catch {
      setLocalError("Error en el registro. Intente de nuevo.");
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
        Sign Up
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Please fill your information below
      </Typography>

      {/* Username */}
      <TextField
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <AccountCircleIcon color="action" sx={{ marginRight: 1 }} />
          ),
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      {/* First Name */}
      <TextField
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <AccountCircleIcon color="action" sx={{ marginRight: 1 }} />
          ),
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      {/* Last Name */}
      <TextField
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <AccountCircleIcon color="action" sx={{ marginRight: 1 }} />
          ),
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      {/* Email */}
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

      {/* Password */}
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

      {/* Confirm Password */}
      <TextField
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
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

      {/* Birthdate */}
      <TextField
        name="birthdate"
        type="date"
        value={formData.birthdate}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <CakeIcon color="action" sx={{ marginRight: 1 }} />,
        }}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '10px',
        }}
      />

      {/* Botón de envío */}
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
        Register
      </Button>

      {/* Muestra el error si existe */}
      {(localError || error) && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {localError || error}
        </Typography>
      )}

      {/* Enlaces de pie de página */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          Already have an account?
        </Typography>
        <Link
          href="#"
          variant="body2"
          sx={{ marginLeft: 0.5, fontWeight: 'bold', color: 'black' }}
        >
          Log in here
        </Link>
      </Box>
    </Box>
  );
};

export default SignupForm;