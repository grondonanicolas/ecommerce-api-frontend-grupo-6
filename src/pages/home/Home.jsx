import { Box, Button, Stack, Typography } from '@mui/material';
import ProductsOutstanding from '../../components/ProductsOutstanding';
import UserProductsHistoric from '../../components/UserProductsHistoric';
import CategoryGrid from '../../components/CategoryGrid';
import image from '../../assets/home.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <Stack container spacing={6} direction="column" className="App" gap={8}>
      <Box position={'relative'}>
        <Box position={'absolute'} top={'20%'} left={'5%'} width={'60%'}>
          <Typography variant="h1" color="black">
            Bienvenido a <br />
            Sportify
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              sx={{
                marginTop: '25px',
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 25px',
                '&:hover': {
                  backgroundColor: '#333',
                  transform: 'scale(1.02)',
                  transition: 'all 0.2s ease-in-out',
                },
              }}
              onClick={() => navigate('/products/catalog')}
            >
              Hacé clic para ver nuestros productos
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontStyle: 'italic',
                lineHeight: '1.4',
              }}
            >
              o bajá para descubrir nuestra
              <br />
              selección especial para vos
            </Typography>
          </Box>
        </Box>
        <img
          src={image}
          alt={'Home'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
      </Box>
      <Box>
        <ProductsOutstanding />
      </Box>
      <Box>
        <CategoryGrid />
      </Box>

      {user && (
        <Box>
          <UserProductsHistoric />
        </Box>
      )}
    </Stack>
  );
};

export default Home;
