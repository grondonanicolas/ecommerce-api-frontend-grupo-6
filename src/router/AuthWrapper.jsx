import { AuthProvider } from '../context/AuthContext';
import { Outlet } from 'react-router-dom';

const AuthWrapper = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default AuthWrapper;
