import { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const isAdmin = user && user.isAdmin;
  const isLoggedIn = user && user.email;

  const shouldRenderAdminPanel = isAdmin;
  const shouldIgnoreFavourites = isAdmin || !isLoggedIn;
  const shouldIgnoreCart = isAdmin || !isLoggedIn;
  const shouldRenderProfileImage = user && user.image;

  const handleMenuOpen = (event) => {
    if (!user) {
      navigate('/login');
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
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
            '&:hover': {
              opacity: 0.8,
            },
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
          <Typography
            color="black"
            variant="body1"
            component="div"
            onClick={() => navigate('products/catalog')}
            sx={{
              cursor: 'pointer',
              mr: 1,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Catálogo
          </Typography>
          {shouldIgnoreFavourites ? null : (
            <Typography
              color="black"
              variant="body1"
              component="div"
              onClick={() => handleMenuItemClick('user/favourites')}
              sx={{
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Favoritos
            </Typography>
          )}
        </Box>
        {/* <SearchBar /> */}
        {shouldIgnoreCart ? null : (
          <IconButton
            color="black"
            size="large"
            edge="end"
            onClick={() => handleMenuItemClick('/cart')}
            sx={{ mr: 0.5 }}
          >
            <ShoppingCartIcon />
          </IconButton>
        )}
        <IconButton
          size="large"
          edge="end"
          color="black"
          onClick={handleMenuOpen}
        >
          {shouldRenderProfileImage ? (
            <Avatar
              src={user.image}
              alt={user.name}
              sx={{ width: 32, height: 32 }}
            />
          ) : (
            <AccountCircleIcon />
          )}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick('/user/profile')}>
            Profile
          </MenuItem>
          {shouldRenderAdminPanel && (
            <MenuItem onClick={() => handleMenuItemClick('/admin/products')}>
              Admin Panel
            </MenuItem>
          )}
          <MenuItem
            onClick={() => {
              logout();
              handleMenuClose();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
