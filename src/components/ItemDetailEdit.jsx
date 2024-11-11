import { useState, useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import {
  Button,
  Box,
  Grid,
  Paper,
  Divider,
  Typography,
  TextField,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import FetcherSWR from '../utils/fetcherSWR';

const ItemDetailEdit = ({
  photos = [],
  descripcion,
  title,
  price = 0,
  stock,
  category,
  productId,
  initialStatus,
}) => {
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(descripcion);
  const [editPrice, setEditPrice] = useState(price);
  const [editStock, setEditStock] = useState(stock);
  const [editPhotos, setEditPhotos] = useState(photos);
  const [editStatus, setEditStatus] = useState(initialStatus);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleSnackbarClose = () => setOpenSnackbar(false);

  const { data: categories, error: categoriesError } = useSWR(
    { url: 'category', options: { method: 'get' } },
    FetcherSWR
  );

  useEffect(() => {
    if (categories && category) {
      const selectedCategory = categories.find((cat) => cat.category === category);
      if (selectedCategory) setEditCategoryId(selectedCategory.id);
    }
  }, [categories, category]);

  // Ordenar fotos y actualizar la imagen principal al cambiar la prioridad
  useEffect(() => {
    const sortedPhotos = [...editPhotos].sort((a, b) => a.priority - b.priority);
    setEditPhotos(sortedPhotos);

    // Seleccionar la imagen con prioridad más baja como principal
    const lowestPriorityIndex = sortedPhotos.findIndex(
      (photo) => photo.priority === Math.min(...sortedPhotos.map((p) => p.priority))
    );
    setSelectedImageIndex(lowestPriorityIndex);
  }, [editPhotos]);

  const handleAddPhoto = () => {
    setEditPhotos([...editPhotos, { priority: editPhotos.length + 1, url: '' }]);
  };

  const handlePhotoChange = (index, field, value) => {
    const updatedPhotos = [...editPhotos];
    updatedPhotos[index][field] = value;
    setEditPhotos(updatedPhotos);

    if (field === 'url' && index === selectedImageIndex) {
      setImageError(false);
    }
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = editPhotos.filter((_, i) => i !== index);
    setEditPhotos(updatedPhotos.map((photo, i) => ({ ...photo, priority: i + 1 })));
  };

  const handleDeleteProduct = async () => {
    try {
      await mutate(
        FetcherSWR({ url: `products/${productId}`, options: { method: 'delete' } })
      );
      setSnackbarMessage('Producto eliminado con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate('/admin/products');
      }, 1000);
    } catch (error) {
      setSnackbarMessage('Error al eliminar el producto');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleUpdateProduct = async () => {
    const productUpdateDTO = {
      name: editTitle,
      description: editDescription,
      price: editPrice,
      stock: editStock,
      categoryId: editCategoryId,
      photos: editPhotos,
      state: editStatus,
    };
  
    try {
      await mutate(
        FetcherSWR({ url: `products/${productId}`, options: { method: 'put', data: productUpdateDTO } })
      );
  
      setSnackbarMessage('Producto actualizado con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
  
      // Refrescar la caché de `SWR` para este producto específico
      mutate({ url: `products/${productId}` });
  
      setTimeout(() => navigate('/admin/products'), 1000);
    } catch (error) {
      setSnackbarMessage('Error al actualizar el producto');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
  

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
        {/* Left Side: Photo Previews */}
        <Grid item xs={12} md={8} lg={7}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              position: 'relative',
              height: '100%',
            }}
          >
            {editPhotos.length > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  p: 0.5,
                }}
              >
                {editPhotos.map((photo, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setImageError(false);
                    }}
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
                      src={photo.url || 'https://via.placeholder.com/150'}
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'lightgray',
                borderRadius: '8px',
              }}
            >
              {imageError ? (
                <Typography variant="h6" color="text.secondary">
                  Sin imagen
                </Typography>
              ) : (
                <img
                  src={editPhotos[selectedImageIndex]?.url || 'https://via.placeholder.com/500'}
                  alt={title || 'Producto'}
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              )}
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Photo Inputs and Product Details */}
        <Grid item xs={12} md={4} lg={5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 400, mb: 2 }}>
              Editar Producto
            </Typography>

            <TextField
              label="Título"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Descripción"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              fullWidth
              multiline
              sx={{ mb: 2 }}
            />

            <TextField
              label="Precio"
              value={editPrice}
              onChange={(e) => setEditPrice(Number(e.target.value))}
              type="number"
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Stock"
              value={editStock}
              onChange={(e) => setEditStock(Number(e.target.value))}
              type="number"
              fullWidth
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                value={editCategoryId || ''}
                onChange={(e) => setEditCategoryId(e.target.value)}
                label="Categoría"
              >
                {categoriesError ? (
                  <MenuItem disabled>Error al cargar categorías</MenuItem>
                ) : categories ? (
                  categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.category}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>Cargando categorías...</MenuItem>
                )}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              <Typography variant="h6">URLs y Prioridad de Imágenes</Typography>
              {editPhotos.map((photo, index) => (
                <Box key={index} display="flex" alignItems="center" gap={2}>
                  <TextField
                    label={`URL de la imagen ${index + 1}`}
                    value={photo.url}
                    onChange={(e) => handlePhotoChange(index, 'url', e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="Prioridad"
                    value={photo.priority}
                    onChange={(e) => handlePhotoChange(index, 'priority', Number(e.target.value))}
                    type="number"
                    sx={{ width: 80 }}
                  />
                  <IconButton color="error" onClick={() => handleDeletePhoto(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddPhoto}>
                Agregar Imagen
              </Button>
            </Box>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Estado</InputLabel>
              <Select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                label="Estado"
              >
                <MenuItem value="DRAFT">Borrador</MenuItem>
                <MenuItem value="ACTIVE">Activo</MenuItem>
              </Select>
            </FormControl>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleUpdateProduct}
                startIcon={<EditIcon />}
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
                Actualizar producto
              </Button>

              <Button
                variant="contained"
                fullWidth
                onClick={handleDeleteProduct}
                startIcon={<DeleteIcon />}
                sx={{
                  backgroundColor: '#e53935',
                  padding: '12px',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#d32f2f',
                  },
                }}
              >
                Eliminar producto
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

ItemDetailEdit.propTypes = {
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  initialStatus: PropTypes.string.isRequired,
};

export default ItemDetailEdit;
