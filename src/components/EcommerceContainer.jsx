import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';

const EcommerceContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <Toolbar />
      {/* Spacer for the fixed NavBar */}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

EcommerceContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EcommerceContainer;
