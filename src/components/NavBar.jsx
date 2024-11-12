import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
// import SearchBar from './SearchBar';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
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
          >
            Catálogo
          </Typography>
          <Typography
            color="black"
            variant="body1"
            component="div"
            onClick={() => navigate('user/favourites')}
          >
            Favoritos
          </Typography>
        </Box>
        {/* <SearchBar /> */}
        <IconButton
          color="black"
          size="large"
          edge="end"
          onClick={() => navigate('/cart')}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton size="large" edge="end" color="black">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
