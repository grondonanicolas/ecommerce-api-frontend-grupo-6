import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Skeleton,
} from '@mui/material';

const ItemDetailSkeleton = () => {
  return (
    <Card
      elevation="0"
      sx={{ width: 250, borderRadius: '12px 12px 12px 12px' }}
    >
      <CardMedia height="300" sx={{ borderRadius: '12px' }}>
        <Skeleton variant="rectangular" width="100%" height="300px" />
      </CardMedia>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="left">
          <Typography noWrap variant="body1" fontWeight="bold">
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <Skeleton width="40%" />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemDetailSkeleton;
