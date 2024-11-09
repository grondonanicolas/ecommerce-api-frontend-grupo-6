import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item = ({ imageUrl, title, price, productId }) => {
  const navigate = useNavigate();

  const handleNavigateProducto = () => {
    navigate(`/products/${productId}`);
  };

  return (
    <Card
      elevation="0"
      sx={{ width: 250, borderRadius: '12px 12px 12px 12px' }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={title}
        sx={{ borderRadius: '12px' }}
      />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="left">
          <Typography noWrap variant="body1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
          <Button onClick={handleNavigateProducto}>Ver más</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Item;
