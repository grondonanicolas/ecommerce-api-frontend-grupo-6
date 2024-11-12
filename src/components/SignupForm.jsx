import { useState, useContext } from 'react';
import { Box, TextField, Typography, Button, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CakeIcon from '@mui/icons-material/Cake';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SnackBarContext } from '../context/SnackBarContext';

const SignupForm = ({ isAdmin = false }) => { 
  const { onToggleOpenSnackbar, onSetSnackBarMessage, onSetSnachBarSeverity } =
  useContext(SnackBarContext);
  
  const { signup, error } = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    profilePic: '', // Nuevo campo para la URL de la imagen de perfil
    role: 'USER', 
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

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    try {
      await signup(
        formData.userName,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        formData.birthDate,
        formData.profilePic,
        formData.role,
      );
      onSetSnachBarSeverity('success');
      onSetSnackBarMessage('Usuario añadido.');
      onToggleOpenSnackbar(true);

      if (!isAdmin){
        navigate('/');
      }
    } catch {
      setLocalError('Error en el registro. Intente de nuevo.');
      onSetSnackBarMessage(
        'Hubo un problema al agregar el producto al carrito'
      );
      onSetSnachBarSeverity('error');
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
      {!isAdmin && (
        <>
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
        </>
      )}

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

      {isAdmin && (
        <TextField
          select
          name="role"
          label="Rol de usuario"
          value={formData.role}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: '10px',
          }}
        >
          <MenuItem value="USER">Usuario</MenuItem>
          <MenuItem value="ADMIN">Administrador</MenuItem>
        </TextField>
      )}

      {/* Campo para la URL de la imagen de perfil */}
      <TextField
        name="profilePic"
        placeholder="URL de la imagen de perfil"
        value={formData.profilePic}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: <AccountCircleIcon color="action" sx={{ marginRight: 1 }} />,
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
        Crear cuenta
      </Button>

      {(localError || error) && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {localError || error}
        </Typography>
      )}
    </Box>
  );
};

export default SignupForm;
