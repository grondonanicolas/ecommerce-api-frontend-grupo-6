import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';

const EcommerceContainer = ({ children }) => {
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
      <Box sx={{ flexGrow: 1, alignContent: 'center' }}>{children}</Box>
      <Footer />
    </Box>
  );
};

EcommerceContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EcommerceContainer;
