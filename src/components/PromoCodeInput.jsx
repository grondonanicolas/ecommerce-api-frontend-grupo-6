import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const PromoCodeInput = ({ onApply }) => {
  const [promoCode, setPromoCode] = useState('');

  const handleApply = () => {
    if (promoCode.trim()) {
      onApply(promoCode.trim());
      setPromoCode('');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        variant="outlined"
        placeholder="Agregar código"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        sx={{
          flex: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: 'grey.100',
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px 14px',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalOfferIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        onClick={handleApply}
        sx={{
          borderRadius: '20px',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Aplicar
      </Button>
    </Box>
  );
};

PromoCodeInput.propTypes = {
  onApply: PropTypes.func.isRequired,
};

export default PromoCodeInput;
