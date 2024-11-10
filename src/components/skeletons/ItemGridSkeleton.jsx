import { Box, Skeleton } from '@mui/material';

const ItemGridSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {Array.from(new Array(6)).map((_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%', padding: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={140} />
            <Skeleton width="60%" height={30} sx={{ marginTop: 1 }} />
            <Skeleton width="40%" height={20} sx={{ marginTop: 1 }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ItemGridSkeleton;
