import { useContext } from 'react';
import { FavouritesContext } from '../../../context/FavouritesContext';
import ItemGrid from '../../../components/ItemGrid';
import { Box, Typography } from '@mui/material';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';

export default function Favourites() {
  const { favourites, error, isLoading } = useContext(FavouritesContext);

  if (isLoading) {
    return (
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <ItemGridSkeleton />
      </Box>
    );
  }

  if (error) {
    <p>Ocurrió un error</p>;
  }

  return favourites?.length > 0 ? (
    <Box sx={{ width: '90%', margin: '0 auto' }}>
      <ItemGrid items={favourites}></ItemGrid>
    </Box>
  ) : (
    <Typography variant="body1">
      Aún no has agregado productos a favoritos
    </Typography>
  );
}
