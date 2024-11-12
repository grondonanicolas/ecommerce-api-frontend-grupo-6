import PropTypes from 'prop-types';
import { Box, Typography, Divider } from '@mui/material';

const OrderSummary = ({
  subtotal,
  discount,
  discountPercentage,
  deliveryFee,
  total,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 16px 16px 16px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Resumen de compra
      </Typography>

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body1" color="text.secondary">
          Subtotal
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          ${subtotal}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body1" color="text.secondary">
          Descuento ({discountPercentage}%)
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="error">
          -${discount}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body1" color="text.secondary">
          Costo de envío
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          ${deliveryFee}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="h6" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ${total}
        </Typography>
      </Box>
    </Box>
  );
};

OrderSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderSummary;
