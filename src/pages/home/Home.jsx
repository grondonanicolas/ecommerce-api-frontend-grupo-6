import { Box, Grid, Grid2, Stack } from '@mui/material';
import UserInfo from '../../components/UserInfo';
import ProductsOutstanding from '../../components/ProductsOutstanding';
import ProductsHistoric from '../../components/UserProductsHistoric';

const Home = () => {
  // const user = {
  //   name: 'John Doe',
  //   avatarUrl: 'https://via.placeholder.com/100',
  //   email: 'john@email.com',
  // };
  return (
    <Stack container spacing={6} direction="column" className="App" gap={8}>
      {/* <Box>
        <UserInfo user={user} />
      </Box> */}
      <Box>
        <ProductsOutstanding />
      </Box>
      <Box>
        <ProductsHistoric />
      </Box>
    </Stack>
  );
};

export default Home;
