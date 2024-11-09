import ImageComponent from '../../../components/ImageComponent';
import SignupForm from '../../../components/SignupForm';
import { Box } from '@mui/material';

const SignUpPage = () => {
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
          margin: 0,
          padding: 0,
        }}
      >
        <ImageComponent />
      </Box>

      {/* Sección derecha con SignupForm */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          backgroundColor: 'white', // Asegura que esta sección tenga un fondo blanco
        }}
      >
        <SignupForm />
      </Box>
    </Box>
  );
};

export default SignUpPage;
