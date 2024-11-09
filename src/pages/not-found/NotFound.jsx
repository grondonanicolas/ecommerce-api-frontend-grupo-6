import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          borderRadius: '10px',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
