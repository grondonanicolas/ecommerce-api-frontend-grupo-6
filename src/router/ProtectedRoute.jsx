/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const ProtectedRoute = ({ requiredRole }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!user || (requiredRole && user.role !== requiredRole)) {
      setOpen(true);
    }
  }, [user, requiredRole]);

  const handleClose = () => {
    setOpen(false);
    setShouldRedirect(true);
  };

  if (open) {
    return (
      <Dialog open onClose={handleClose}>
        <DialogTitle>Session Lost</DialogTitle>
        <DialogContent>
          Your session has been lost. Please log in again.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  if (shouldRedirect) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!user || (requiredRole && user.role !== requiredRole)) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
