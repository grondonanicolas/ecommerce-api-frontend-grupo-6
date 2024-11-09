import { Box } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const EcommerceContainer = () => {
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
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default EcommerceContainer;
