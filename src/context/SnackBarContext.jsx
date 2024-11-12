import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const SnackBarContext = createContext();

function SnackBarContextProvider({ children }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const onToggleOpenSnackbar = (value) => setOpenSnackbar(value);

  const onSetSnackBarMessage = (message) => setSnackbarMessage(message);

  const onSetSnachBarSeverity = (severity) => setSnackbarSeverity(severity);

  return (
    <SnackBarContext.Provider
      value={{
        onSetSnackBarMessage,
        onSetSnachBarSeverity,
        onToggleOpenSnackbar,
      }}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => onToggleOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => onToggleOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
}

SnackBarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackBarContextProvider;
