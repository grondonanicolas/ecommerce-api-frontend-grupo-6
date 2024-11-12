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
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import FetcherSWR from '../../../utils/fetcherSWR';

const ProductCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [photos, setPhotos] = useState([{ priority: 1, url: '' }]);
  const [categoryId, setCategoryId] = useState(null);
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
    const sortedPhotos = [...photos].sort((a, b) => a.priority - b.priority);
    setPhotos(sortedPhotos);

    const lowestPriorityIndex = sortedPhotos.findIndex(
      (photo) => photo.priority === Math.min(...sortedPhotos.map((p) => p.priority))
    );
    setSelectedImageIndex(lowestPriorityIndex);
  }, [photos]);

  const handleAddPhoto = () => {
    setPhotos([...photos, { priority: photos.length + 1, url: '' }]);
  };

  const handlePhotoChange = (index, field, value) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index][field] = value;
    setPhotos(updatedPhotos);

    if (field === 'url' && index === selectedImageIndex) {
      setImageError(false);
    }
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos.map((photo, i) => ({ ...photo, priority: i + 1 })));
  };

  const handleCreateProduct = async () => {
    const productCreateDTO = {
      name: title,
      description,
      price,
      stock,
      categoryId,
      photos,
    };

    try {
      await FetcherSWR({
        url: 'products',
        options: { method: 'POST', data: productCreateDTO },
      });
      setSnackbarMessage('Producto creado con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      setTimeout(() => navigate('/admin/products'), 1000);
    } catch (error) {
      setSnackbarMessage('Error al crear el producto');
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
          <Box sx={{ display: 'flex', gap: 2, position: 'relative', height: '100%' }}>
            {photos.length > 1 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 0.5 }}>
                {photos.map((photo, index) => (
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
                      alt={`Imagen ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={() => setImageError(true)}
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
                  src={photos[selectedImageIndex]?.url || 'https://via.placeholder.com/500'}
                  alt="Imagen principal"
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

        {/* Right Side: Product Details */}
        <Grid item xs={12} md={4} lg={5}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 400, mb: 2 }}>
              Crear Producto
            </Typography>

            <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth sx={{ mb: 2 }} />

            <TextField label="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline sx={{ mb: 2 }} />

            <TextField label="Precio" value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" fullWidth sx={{ mb: 2 }} />

            <TextField label="Stock" value={stock} onChange={(e) => setStock(Number(e.target.value))} type="number" fullWidth sx={{ mb: 2 }} />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Categoría</InputLabel>
              <Select value={categoryId || ''} onChange={(e) => setCategoryId(e.target.value)} label="Categoría">
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

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6">URLs y Prioridad de Imágenes</Typography>
              {photos.map((photo, index) => (
                <Box key={index} display="flex" alignItems="center" gap={2}>
                  <TextField label={`URL de la imagen ${index + 1}`} value={photo.url} onChange={(e) => handlePhotoChange(index, 'url', e.target.value)} fullWidth />
                  <TextField label="Prioridad" value={photo.priority} onChange={(e) => handlePhotoChange(index, 'priority', Number(e.target.value))} type="number" sx={{ width: 80 }} />
                  <IconButton color="error" onClick={() => handleDeletePhoto(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddPhoto}>
                Agregar Imagen
              </Button>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                startIcon={<SaveIcon />}
                onClick={handleCreateProduct}
                sx={{
                  padding: '12px',
                  textTransform: 'none',
                  fontSize: '16px',
                }}
              >
                Guardar
              </Button>

              <Button
                variant="contained"
                color="error"
                fullWidth
                startIcon={<CancelIcon />}
                onClick={() => navigate('/admin/products')}
                sx={{
                  padding: '12px',
                  textTransform: 'none',
                  fontSize: '16px',
                }}
              >
                Cancelar
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ProductCreate;
