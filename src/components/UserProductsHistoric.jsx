import ItemGrid from './ItemGrid';
import ItemGridSkeleton from './skeletons/ItemGridSkeleton';
import { Box, Typography } from '@mui/material';
import useHistoric from '../hooks/useHistoric';

export default function UserProductsHistoric() {
  const { data, error, isLoading } = useHistoric();

  if (isLoading) return <ItemGridSkeleton />;

  if (error) return <></>;

  if (data) {
    return (
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          justifyContent={'center'}
          marginBottom={2}
          marginTop={5}
        >
          Historial
        </Typography>
        {data.length > 0 && <ItemGrid items={data.reverse().slice(0, 7)} />}
        {data.length === 0 && (
          <Typography>Aún no has visitado ningún producto</Typography>
        )}
      </Box>
    );
  }
}
