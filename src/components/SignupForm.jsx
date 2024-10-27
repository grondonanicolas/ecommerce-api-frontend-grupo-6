import { useState } from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
        Registrarse
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Por favor, complete los campos para registrarse.
      </Typography>

      {/* First Name */}
      <TextField
        name="firstName"
        placeholder="Nombre"
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

      <TextField
        name="lastName"
        placeholder="Apellido"
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
        placeholder="Contraseña"
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

      <TextField
        name="confirmPassword"
        type="password"
        placeholder="Confirmar Contraseña"
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

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          borderRadius: '20px',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
        fullWidth
      >
        Registrarse
      </Button>

      <Box display="flex" justifyContent="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          ¿Ya tienes una cuenta?
        </Typography>
        <Link
          href="#"
          variant="body2"
          sx={{ marginLeft: 0.5, fontWeight: 'bold' }}
        >
          Loguese aqui
        </Link>
      </Box>
    </Box>
  );
};

export default SignupForm;
