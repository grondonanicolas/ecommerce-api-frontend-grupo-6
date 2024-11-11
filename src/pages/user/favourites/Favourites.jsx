// import { useContext } from 'react';
// import { FavouritesContext } from '../../../context/FavouritesContext';
import ItemGrid from '../../../components/ItemGrid';
import { Box, Typography } from '@mui/material';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';

export default function Favourites() {
  const {
    data: favourites,
    error,
    isLoading,
  } = useSWR(
    {
      url: 'users/favourite',
    },
    FetcherSWR
  );

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

  return (
    <>
      <Box marginBottom={5}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          justifyContent={'center'}
        >
          Favoritos
        </Typography>
      </Box>

      {favourites?.length > 0 ? (
        <Box sx={{ width: '90%', margin: '0 auto' }}>
          <ItemGrid items={favourites}></ItemGrid>
        </Box>
      ) : (
        <Typography variant="body1">
          Aún no has agregado productos a favoritos
        </Typography>
      )}
    </>
  );
}
