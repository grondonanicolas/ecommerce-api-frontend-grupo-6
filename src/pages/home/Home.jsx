import { Box, Button, Stack, Typography } from '@mui/material';
import ProductsOutstanding from '../../components/ProductsOutstanding';
import UserProductsHistoric from '../../components/UserProductsHistoric';
import CategoryGrid from '../../components/CategoryGrid';
import image from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  return (
    <Stack container spacing={6} direction="column" className="App" gap={8}>
      <Box position={'relative'}>
        <Box position={'absolute'} top={'20%'} left={'5%'} width={'60%'}>
          <Typography variant="h1" color="black">Bienvenido a <br />Sportify</Typography>
          <Button sx={{marginTop: '25px'}} onClick={()=> navigate('/products/catalog')}>Ver productos</Button>
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
      
      {user &&
        <Box>
          <UserProductsHistoric />
        </Box>
        }
    </Stack>
  );
};

export default Home;
