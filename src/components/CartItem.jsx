import PropTypes from 'prop-types';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({
  imageUrl,
  name,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        overflow: 'hidden',
        maxWidth: '100%',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{ minWidth: 0, flexGrow: 1 }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={name}
          sx={{
            width: 80,
            height: 80,
            borderRadius: '8px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <Box
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            minWidth: 0,
          }}
        >
          <Typography variant="h6" fontWeight="bold" noWrap>
            {name}
          </Typography>
          <Typography variant="h6" color="text.primary" noWrap>
            ${price}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          minWidth: 0,
          marginLeft: 2.5,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
          sx={{
            backgroundColor: 'grey.100',
            padding: '2px 4px',
            borderRadius: '20px',
            minWidth: '85px',
          }}
        >
          <IconButton
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            size="small"
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="body1"
            noWrap
            sx={{ minWidth: '24px', textAlign: 'center' }}
          >
            {quantity}
          </Typography>
          <IconButton
            onClick={() => onQuantityChange(quantity + 1)}
            size="small"
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton onClick={onRemove} color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

CartItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
