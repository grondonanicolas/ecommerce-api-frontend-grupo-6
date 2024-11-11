import { useContext, useEffect, useState } from 'react';
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
  imageUrl = [
    'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg',
    'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75',
    'https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=',
  ],
  title,
  price = 0,
  stock,
  descripcion,
  productId,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Aseguramos que imageUrl sea siempre un array
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

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
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              position: 'relative',
              height: '100%',
            }}
          >
            {/* Carrusel vertical de miniaturas - solo se muestra si hay más de una imagen */}
            {images.length > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  p: 0.5,
                }}
              >
                {images.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    sx={{
                      width: 60,
                      height: 60,
                      cursor: 'pointer',
                      border:
                        index === selectedImageIndex
                          ? '2px solid #3483fa'
                          : '1px solid lightgray',
                      borderRadius: 1,
                      overflow: 'hidden',
                      opacity: index === selectedImageIndex ? 1 : 0.7,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <img
                      src={img}
                      alt={`${title} - imagen ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            )}

            {/* Imagen principal */}
            <Box
              sx={{
                flexGrow: 1,
                position: 'relative',
                height: '100%',
              }}
            >
              <img
                src={images[selectedImageIndex]}
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
                onClick={()=> handleFavourite()}
              >
                {isFavourite ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Box>
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

            <Typography
              variant="body1"
              sx={{
                mb: 1,
                fontWeight: 500,
              }}
            >
              Talle
            </Typography>

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
  imageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ItemDetail;
