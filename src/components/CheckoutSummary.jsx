import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import OrderSummary from './OrderSummary';
import PromoCodeInput from './PromoCodeInput';

const CheckoutSummary = ({
  subtotal,
  discount,
  discountPercentage,
  deliveryFee,
  total,
  onApplyPromoCode,
  onCheckout,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        padding: 3,
        borderRadius: '16px',
        border: '1px solid lightgray',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        backgroundColor: 'white',
      }}
    >
      <OrderSummary
        subtotal={subtotal}
        discount={discount}
        discountPercentage={discountPercentage}
        deliveryFee={deliveryFee}
        total={total}
      />

      <PromoCodeInput onApply={onApplyPromoCode} />

      <Button
        variant="contained"
        onClick={onCheckout}
        fullWidth
        sx={{
          marginTop: 2,
          padding: '10px 0',
          borderRadius: '20px',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

CheckoutSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onApplyPromoCode: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CheckoutSummary;
