import React from 'react';
import { Divider, Box, Skeleton } from '@mui/material';
import PurchasedItemSkeleton from './PurchasedItemSkeleton';

const PurchasedItemListSkeleton = () => {
  return (
    <Box
      sx={{
        margin: 5,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 1,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Skeleton variant="text" width={80} height={30} />
        <Skeleton variant="text" width={60} height={20} />
      </Box>

      {[...Array(3)].map((_, index) => (
        <React.Fragment key={index}>
          <PurchasedItemSkeleton />
          {index < 2 && <Divider sx={{ marginY: 2 }} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default PurchasedItemListSkeleton;
