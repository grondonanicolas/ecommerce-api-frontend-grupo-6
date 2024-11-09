import ImageComponent from '../../../components/ImageComponent';
import LoginForm from '../../../components/LoginForm';
import { Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* Sección izquierda con ImageComponent */}
      <Box
        sx={{
          width: '50%',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageComponent />
      </Box>

      {/* Sección derecha con LoginForm */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
