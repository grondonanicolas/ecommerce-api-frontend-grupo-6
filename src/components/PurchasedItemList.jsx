import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Typography, Box, Grid2 } from '@mui/material';
import PurchasedItem from './PurchasedItem';

const PurchasedItemList = ({ items, date, status }) => {
  const statusColors = {
    Entregado: 'green',
    'En camino': 'orange',
    Cancelado: 'red',
  };

  const statusColor = statusColors[status] || 'black';

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
          <Typography
            variant="h5"
            sx={{ color: statusColor, fontWeight: 'bold' }}
          >
            {status}
          </Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Grid2>
      </Grid2>

      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <PurchasedItem purchasedItem={item} />
          {index < items.length - 1 && <Divider sx={{ marginY: 2 }} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

PurchasedItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photos: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default PurchasedItemList;
