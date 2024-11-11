import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import { AuthContext } from '../../../context/AuthContext';
import { Box, Grid, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Item from '../../../components/Item';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';

const ProductAdminBoard = () => {
  const navigate = useNavigate();
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
      <Box display="flex" justifyContent="center" alignItems="center" mb={2} position="relative">
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Mis Productos
        </Typography>
        <Box position="absolute" right={0}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={() => navigate('/admin/products/create')}
          >
            Crear
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {data.map((product) => {
          const primaryPhoto = product.photos?.length
            ? product.photos.reduce((minPhoto, currentPhoto) =>
                currentPhoto.priority < minPhoto.priority ? currentPhoto : minPhoto
              )
            : null;

          return (
            <Grid item key={product.id}>
              <Item
                imageUrl={primaryPhoto?.url || 'https://via.placeholder.com/150'}
                title={product.name}
                state={product.state}
                productId={product.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductAdminBoard;
