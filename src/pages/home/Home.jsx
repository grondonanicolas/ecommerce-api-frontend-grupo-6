import { Box, Stack } from '@mui/material';
import ProductsOutstanding from '../../components/ProductsOutstanding';
import UserProductsHistoric from '../../components/UserProductsHistoric';
import CategoryGrid from '../../components/CategoryGrid';

const Home = () => {
  return (
    <Stack container spacing={6} direction="column" className="App" gap={8}>
      <Box>
        <ProductsOutstanding />
      </Box>
      <Box>
        <CategoryGrid />
      </Box>
      <Box>
        <UserProductsHistoric />
      </Box>
    </Stack>
  );
};

export default Home;
