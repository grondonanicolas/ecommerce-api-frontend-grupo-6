import { useState } from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login form submitted:', formData);
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
        Login
      </Typography>

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
        Login
      </Button>

      {/* Footer Links */}
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Link href="#" variant="body2" color="text.secondary">
          ¿Olvido su contraseña?
        </Link>
        <Link href="#" variant="body2" sx={{ fontWeight: 'bold' }}>
          Crear una cuenta
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
