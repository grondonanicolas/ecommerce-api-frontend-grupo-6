import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';

const EcommerceContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

EcommerceContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EcommerceContainer;
