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
} from '@mui/material';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import FetcherSWR from '../utils/fetcherSWR';

const API_URL = import.meta.env.VITE_API_URL;

const ItemDetailEdit = ({
  imageUrl,
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
  const [editImageUrl, setEditImageUrl] = useState(imageUrl);
  const [imageError, setImageError] = useState(false);
  const [editStatus, setEditStatus] = useState(initialStatus);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const { data: categories, error: categoriesError } = useSWR(
    { url: 'category', options: { method: 'get' } },
    FetcherSWR
  );

  useEffect(() => {
    if (categories && category) {
      const selectedCategory = categories.find((cat) => cat.category === category);
      if (selectedCategory) {
        setEditCategoryId(selectedCategory.id);
      }
    }
  }, [categories, category]);

  const handleUpdateProduct = async () => {
    const productUpdateDTO = {
      name: editTitle,
      description: editDescription,
      price: editPrice,
      stock: editStock,
      categoryId: editCategoryId,
      image: editImageUrl,
      state: editStatus,
    };
  
    try {
      await mutate(
        { url: `products/${productId}`, options: { method: 'put', data: productUpdateDTO } },
        FetcherSWR({ url: `products/${productId}`, options: { method: 'put', data: productUpdateDTO } })
      );
      setSnackbarMessage('Producto actualizado con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
  
      setTimeout(() => {
        navigate('/admin/products');
      }, 1000);
    } catch (error) {
      setSnackbarMessage('Error al actualizar el producto');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
  
  const handleDeleteProduct = async () => {
    try {
      await mutate(
        { url: `products/${productId}`, options: { method: 'delete' } },
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
          <Box sx={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {imageError ? (
              <Typography variant="h6" color="text.secondary">
                Sin imagen
              </Typography>
            ) : (
              <img
                src={editImageUrl}
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
        </Grid>

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

            <TextField
              label="URL de la Imagen"
              value={editImageUrl}
              onChange={(e) => {
                setEditImageUrl(e.target.value);
                setImageError(false);
              }}
              fullWidth
              sx={{ mb: 2 }}
            />

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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

ItemDetailEdit.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  initialStatus: PropTypes.string.isRequired,
};

export default ItemDetailEdit;
