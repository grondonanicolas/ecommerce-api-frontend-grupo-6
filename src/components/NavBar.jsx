import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAuthenticatedNavigation = (path) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}
    >
      <Toolbar sx={{ minHeight: 'px' }}>
        <Typography
          color="black"
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontWeight: 'bold',
            minWidth: '100px',
            cursor: 'pointer',
            '&:hover': {},
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          Sportify
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'right',
            gap: 2,
            m: 2,
          }}
        >
          {/* <Typography color="black" variant="body1" component="div">
            Destacados
          </Typography> */}
          <Typography
            color="black"
            variant="body1"
            component="div"
            onClick={() => navigate('products/catalog')}
            sx={{
              cursor: 'pointer',
              mr: 1,
            }}
          >
            Catálogo
          </Typography>
          <Typography
            color="black"
            variant="body1"
            component="div"
            onClick={() => handleAuthenticatedNavigation('user/favourites')}
            sx={{ cursor: 'pointer' }}
          >
            Favoritos
          </Typography>
        </Box>
        {/* <SearchBar /> */}
        <IconButton
          color="black"
          size="large"
          edge="end"
          onClick={() => handleAuthenticatedNavigation('/cart')}
          sx={{ mr: 0.5 }}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="black"
          onClick={() => handleAuthenticatedNavigation('/profile')}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
