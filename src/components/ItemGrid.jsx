import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Item from './Item';

const ItemGrid = ({ items }) => {
  console.log(items);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {items?.map((item) => {
        const primaryPhoto = item.photos?.length
        ? item.photos.reduce((minPhoto, currentPhoto) =>
            currentPhoto.priority < minPhoto.priority ? currentPhoto : minPhoto
          )
        : null;
        return(
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Item
            imageUrl={primaryPhoto?.url}
            title={item.name}
            price={item.price}
            productId={item.id}
          />
        </Box>
      )})}
    </Box>
  );
};

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemGrid;
