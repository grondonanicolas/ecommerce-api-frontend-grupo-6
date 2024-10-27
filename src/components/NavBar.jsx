import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <AppBar position="static" elevation={3} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
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
        >
          Sportify
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            m: 2,
          }}
        >
          <Typography color="black" variant="body1" component="div">
            Destacados
          </Typography>
          <Typography color="black" variant="body1" component="div">
            Catálogo
          </Typography>
          <Typography color="black" variant="body1" component="div">
            Nuevo
          </Typography>
        </Box>
        <SearchBar />
        <IconButton color="black" size="large" edge="end">
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
