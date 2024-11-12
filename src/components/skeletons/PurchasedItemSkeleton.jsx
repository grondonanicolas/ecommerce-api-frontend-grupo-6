import { Card, CardContent, Skeleton, Box } from '@mui/material';

const PurchasedItemSkeleton = () => {
  return (
    <Card
      sx={{
        width: '1000px',
        minWidth: '500px',
        padding: 0,
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Skeleton
            variant="rounded"
            width={100}
            height={100}
            sx={{
              borderRadius: 2,
              minWidth: '100px',
              minHeight: '100px',
              maxHeight: '300px',
              maxWidth: '300px',
            }}
          />
          <Box sx={{ pl: 2, flex: 1 }}>
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="40%" height={20} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PurchasedItemSkeleton;
