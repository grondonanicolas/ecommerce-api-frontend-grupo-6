import PropTypes from 'prop-types';
import { Box, Divider } from '@mui/material';
import CartItem from './CartItem';

const CartItemList = ({ items, onQuantityChange, onRemove }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        border: '1px solid lightgray',
        borderRadius: '16px',
        padding: 2,
        boxSizing: 'border-box',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {items.map((item, index) => (
        <Box key={item.id} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <CartItem
            imageUrl={item.photos?.find((f) => f.priority == 1)}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={(newQuantity) =>
              onQuantityChange(item.id, newQuantity)
            }
            onRemove={() => onRemove(item.id)}
          />
          {index < items.length - 1 && (
            <Divider
              sx={{
                my: 2,
                borderColor: 'lightgray',
                borderWidth: '1px',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

CartItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      photos: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItemList;
