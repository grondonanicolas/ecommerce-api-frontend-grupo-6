import useSWR from 'swr';
import FetcherSWR from '../utils/fetcherSWR';
import ItemGrid from './ItemGrid';
import ItemGridSkeleton from './skeletons/ItemGridSkeleton';
import { Box, Typography } from '@mui/material';

export default function ProductsOutstanding() {
  const { data, error, isLoading } = useSWR(
    {
      url: 'products/outstanding',
    },
    FetcherSWR
  );

  if (isLoading) return <ItemGridSkeleton />;

  if (error) return <></>;

  if (data) {
    return (
      <Box gap={12} sx={{ width: '90%', margin: '0 auto' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          justifyContent={'center'}
        >
          Productos destacados
        </Typography>
        <ItemGrid items={data} />
      </Box>
    );
  }
}
