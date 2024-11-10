import { useContext } from 'react';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import { AuthContext } from '../../../context/AuthContext';
import { Box, Grid, Typography } from '@mui/material';
import Item from '../../../components/Item';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';

const ProductAdminBoard = () => {
  const { user } = useContext(AuthContext);
  const { data, error, isLoading } = useSWR(
    {
      url: 'products',
    },
    FetcherSWR
  );

  if (isLoading) {
    return <ItemGridSkeleton />;
  }

  if (error) {
    return <p>Error al cargar productos</p>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mis Productos
      </Typography>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item key={product.id}>
            <Item
              imageUrl={product.image}
              title={product.name}
              state={product.state}
              productId={product.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductAdminBoard;
