import { useState, useContext } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Snackbar,
  Alert,
  Grid,
} from '@mui/material';
import { Add as AddIcon, Cancel as CancelIcon } from '@mui/icons-material';
import useSWR, { mutate } from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import { AuthContext } from '../../../context/AuthContext';

const CategoriesAdmin = () => {
  const { user } = useContext(AuthContext);
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR(
    {
      url: 'category',
    },
    FetcherSWR
  );

  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCategory('');
  };

  const handleSnackbarClose = () => setOpenSnackbar(false);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      setSnackbarMessage('Por favor, ingrese un nombre para la categoría.');
      setSnackbarSeverity('warning');
      setOpenSnackbar(true);
      return;
    }

    try {
      await FetcherSWR({
        url: 'category',
        options: { method: 'POST', data: { category: newCategory.trim() } },
      });
      setSnackbarMessage('Categoría agregada con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Refresca el listado de categorías
      mutate({ url: 'category' });
      handleCloseModal();
    } catch (error) {
      setSnackbarMessage('Error al agregar la categoría');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  if (isLoading) {
    return <p>Cargando categorías...</p>;
  }

  if (error) {
    return <p>Error al cargar categorías</p>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Listado de Categorías
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenModal}
      >
        Agregar categoría
      </Button>

      <Grid container marginTop={2} spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <Box
              sx={{
                padding: 2,
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: 'background.paper',
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {category.category}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Nueva Categoría
          </Typography>
          <TextField
            label="Nombre de la Categoría"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            fullWidth
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={handleAddCategory}
            >
              Agregar
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<CancelIcon />}
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>

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
    </Box>
  );
};

export default CategoriesAdmin;
