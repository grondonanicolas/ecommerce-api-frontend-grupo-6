import { useState, useContext } from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CakeIcon from '@mui/icons-material/Cake';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const { signup, error } = useContext(AuthContext); // Usa la función signup del contexto
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
  });
  const [localError, setLocalError] = useState(null);
  const navigate = useNavigate();

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
      setLocalError('Passwords do not match.');
      return;
    }

    try {
      // Llama a la función signup de AuthContext
      await signup(
        formData.userName,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        formData.birthDate
      );
    } catch {
      setLocalError('Error en el registro. Intente de nuevo.');
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
        Registro
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Por favor, completa con tus datos abajo (o{' '}
        <Typography
          component="span"
          variant="body1"
          sx={{
            fontWeight: 'bold',
            color: 'black',
            cursor: 'pointer',
            '&:hover': { color: '#535bf2' },
            textDecoration: 'underline',
            transition: 'color 0.3s ease',
          }}
          onClick={() => navigate(-1)}
        >
          volvé a donde estabas
        </Typography>
        ):
      </Typography>

      {/* Username */}
      <TextField
        name="userName"
        placeholder="Nickname de usuario"
        value={formData.userName}
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
        placeholder="Nombre/s"
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
        placeholder="Apellido/s"
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

      {/* Confirm Password */}
      <TextField
        name="confirmPassword"
        type="password"
        placeholder="Confirmá tu contraseña"
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
        name="birthDate"
        type="date"
        value={formData.birthDate}
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
        Crear cuenta
      </Button>

      {/* Muestra el error si existe */}
      {(localError || error) && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {localError || error}
        </Typography>
      )}

      {/* Enlaces de pie de página */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography variant="body2" color="text.secondary" mr={1}>
          ¿Ya estás registrado?
        </Typography>
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
            onClick={() => navigate('/login')}
          >
            Inicia sesión
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
