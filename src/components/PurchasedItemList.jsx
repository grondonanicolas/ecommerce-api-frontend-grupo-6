import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Typography, Box, Grid2 } from '@mui/material';
import PurchasedItem from './PurchasedItem';

const PurchasedItemList = ({ productosComprados, fecha, status, total }) => {
  const statusColors = {
    Entregado: 'green',
    'En camino': 'orange',
    Cancelado: 'red',
  };

  const statusColor = statusColors[status] || 'black';

  const formattedDate = new Date(fecha).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = new Date(fecha).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Box
      sx={{
        margin: 5,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 1,
      }}
    >
      <Grid2
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Grid2 item>
          {status && (
            <Typography
              variant="h5"
              sx={{ color: statusColor, fontWeight: 'bold' }}
            >
              {status}
            </Typography>
          )}
        </Grid2>
        <Grid2 item>
          <Typography variant="body2" color="textSecondary">
            {formattedDate}, {formattedTime}
          </Typography>
        </Grid2>
      </Grid2>

      {productosComprados.map((item, index) => (
        <React.Fragment key={item.name}>
          <PurchasedItem purchasedItem={item} />
          {index < item.length - 1 && <Divider sx={{ marginY: 2 }} />}
        </React.Fragment>
      ))}

      <Divider sx={{ marginY: 2 }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          paddingY: 1,
          paddingX: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: 1 }}>
          Total:
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          ${total.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

PurchasedItemList.propTypes = {
  productosComprados: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  fecha: PropTypes.string.isRequired,
  status: PropTypes.string.optional,
  total: PropTypes.number.isRequired,
};

export default PurchasedItemList;
