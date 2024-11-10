import { Box } from '@mui/material';
import BackofficeNavBar from './BackofficeNavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const AdminContainer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <BackofficeNavBar />
      <Box sx={{ flexGrow: 1, alignContent: 'center' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminContainer;
