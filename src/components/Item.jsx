import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Item = ({ imageUrl, title, price, state, productId }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleNavigateProducto = () => {
    const targetPath = state ? `/admin/products/${productId}` : `/products/${productId}`;
    navigate(targetPath);
  };

  const renderStateLabel = () => {
    if (!state) return null;
    return (
      <Chip
        label={state === 'ACTIVE' ? 'Activo' : 'Borrador'}
        color={state === 'ACTIVE' ? 'success' : 'default'}
        sx={{ mt: 1 }}
      />
    );
  };

  return (
    <Card elevation={0} sx={{ width: 250, borderRadius: '12px' }}>
      {imageError ? (
        <Box
          height="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: 'grey.300', borderRadius: '12px' }}
        >
          <Typography variant="h6" color="text.secondary">
            Sin imagen
          </Typography>
        </Box>
      ) : (
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={title}
          onError={() => setImageError(true)}
          sx={{ borderRadius: '12px' }}
        />
      )}
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="left">
          <Typography noWrap variant="body1" fontWeight="bold">
            {title}
          </Typography>
          {price !== undefined ? (
            <Typography variant="h6" color="text.secondary">
              ${price}
            </Typography>
          ) : (
            renderStateLabel()
          )}
          <Button
            onClick={handleNavigateProducto}
            sx={{
              mt: 1,
              backgroundColor: state ? 'primary.main' : 'secondary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: state ? 'primary.light' : 'secondary.light',
              },
            }}
          >
            {state ? 'Editar' : 'Ver más'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number,
  state: PropTypes.string,
  productId: PropTypes.string.isRequired,
};

export default Item;
