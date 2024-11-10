import { useContext, useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FavouritesContext } from '../context/FavouritesContext';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ItemDetail = ({
  imageUrl,
  title,
  price = 0,
  stock,
  descripcion,
  productId,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  const { isFavouriteCheck, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  const handleSizeChange = (event, newSize) => {
    setSelectedSize(newSize);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona un talle');
      return;
    }
    console.log('Agregado al carrito:', { title, price, size: selectedSize });
  };

  const formatPrice = (price) => {
    if (typeof price !== 'number') return '0';
    return price.toLocaleString();
  };

  const handleFavourite = () => {
    if (isFavourite) {
      setIsFavourite(false);
      removeFavourite(productId);
    } else {
      setIsFavourite(true);
      addFavourite(productId);
    }
  };

  useEffect(() => {
    setIsFavourite(isFavouriteCheck(productId));
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        bgcolor: 'white',
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '20px',
      }}
    >
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xs={12} md={8} lg={7}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <img
              //   src={imageUrl || '/api/placeholder/600/600'}
              src={
                'https://random.imagecdn.app/v1/image?width=500&height=150&category=clothes&format=image'
              }
              alt={title || 'Producto'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'white',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
              onClick={() => {
                handleFavourite(productId);
              }}
            >
              {isFavourite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={5}>
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 400,
                mb: 2,
                color: 'text.primary',
              }}
            >
              {title || 'Producto sin título'}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontWeight: 200,
                mb: 2,
                color: 'text.primary',
              }}
            >
              {descripcion}
            </Typography>

            <Typography
              variant="h4"
              component="p"
              sx={{
                fontWeight: 500,
                mb: 2,
              }}
            >
              $ {formatPrice(price)}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Envío */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                mb: 3,
                color: '#00a650',
              }}
            >
              <Box>
                {stock > 0 && (
                  <Typography variant="body1">Stock: {stock}</Typography>
                )}
                {stock === 0 && (
                  <Typography variant="body1" color={'red'} fontWeight={600}>
                    Producto sin stock
                  </Typography>
                )}
              </Box>
              <Box>
                <LocalShippingIcon size={20} />
                <Typography variant="body1">Envío gratis</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Selector de Talle */}
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                fontWeight: 500,
              }}
            >
              Talle
            </Typography>

            {/* Stock */}

            <ToggleButtonGroup
              value={selectedSize}
              exclusive
              onChange={handleSizeChange}
              sx={{
                display: 'flex',
                mb: 3,
                '& .MuiToggleButton-root': {
                  flex: 1,
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              {sizes.map((size) => (
                <ToggleButton
                  key={size}
                  value={size}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#3483fa',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#2968c8',
                      },
                    },
                  }}
                >
                  {size}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            {/* Botón de Compra */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleAddToCart}
                startIcon={<ShoppingCartIcon />}
                disabled={stock === 0}
                sx={{
                  backgroundColor: '#3483fa',
                  padding: '12px',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#2968c8',
                  },
                }}
              >
                Agregar al carrito
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

ItemDetail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ItemDetail;
