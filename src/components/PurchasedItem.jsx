import PropTypes from 'prop-types';
import { Avatar, Typography, Card, CardContent, Grid2 } from '@mui/material';

const PurchasedItem = ({ purchasedItem }) => {
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
        <Grid2 container spacing={2} alignItems="center">
          <Grid2>
            <Avatar
              variant="rounded"
              alt={purchasedItem.name}
              src={purchasedItem.imageUrl}
              sx={{
                minWidth: '100px',
                minHeight: '100px',
                maxHeight: '300px',
                maxWidth: '300px',
                borderRadius: 2,
              }}
            />
          </Grid2>
          <Grid2 xs sx={{ pl: 2 }}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 'bold', marginTop: 1 }}
            >
              {purchasedItem.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="left">
              Quantity: {purchasedItem.quantity}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

PurchasedItem.propTypes = {
  purchasedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default PurchasedItem;
