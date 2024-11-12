import SignupForm from '../../../components/SignupForm';
import {  Typography } from '@mui/material';

const UserAdmin = () => {
  return (
    <div>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Crear usuarios
        </Typography>
      <SignupForm isAdmin={true} />
    </div>
  );
};

export default UserAdmin;
