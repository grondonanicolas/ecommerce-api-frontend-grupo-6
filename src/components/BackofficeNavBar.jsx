import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BackofficeNavBar = () => {
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
        >
          Sportify
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            m: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/admin/products')}
          >
            <Typography color="black" variant="body1">
              Productos
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/admin/categories')}
          >
            <Typography color="black" variant="body1">
              Categorías
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/admin/users')}
          >
            <Typography color="black" variant="body1">
              Usuarios
            </Typography>
          </Box>
        </Box>
        <IconButton size="large" edge="end" color="black">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BackofficeNavBar;
