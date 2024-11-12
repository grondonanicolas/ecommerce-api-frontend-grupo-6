import PropTypes from 'prop-types';
import {
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid2,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PurchasedItem = ({ purchasedItem }) => {
  console.log('purchasedItem:', purchasedItem);
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
            <Link
              to={`/products/${purchasedItem.productId}`}
              style={{ textDecoration: 'none' }}
            >
              <Avatar
                variant="rounded"
                alt={purchasedItem.name}
                src={purchasedItem.image}
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Link>
          </Grid2>
          <Grid2 xs sx={{ pl: 2 }}>
            <Link
              to={`/products/${purchasedItem.productId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h5"
                align="left"
                sx={{
                  fontWeight: 'bold',
                  marginTop: 1,
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {purchasedItem.name}
              </Typography>
            </Link>
            <Typography variant="body1" color="textSecondary" align="left">
              {purchasedItem.description}
            </Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1" color="textSecondary" align="left">
              Cantidad: {purchasedItem.quantity}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="left">
              Precio por Unidad: ${purchasedItem.pricePerUnit.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{ color: 'textSecondary', marginTop: 0 }}
            >
              Subtotal: ${purchasedItem.subtotal.toFixed(2)}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

PurchasedItem.propTypes = {
  purchasedItem: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    pricePerUnit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    subtotal: PropTypes.string.isRequired,
  }).isRequired,
};

export default PurchasedItem;
