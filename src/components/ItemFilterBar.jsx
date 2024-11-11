import PropTypes from 'prop-types';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
// import ItemPriceFilter from './ItemPriceFilter';
import ItemCategoriesFilter from './ItemCategoriesFilter';

const ItemFilterBar = ({
  itemCategories,
  category,
  onHandleFilterByCategory,
}) => {
  return (
    <Box
      sx={{
        width: '250px',
        padding: 2,
        border: '1px solid lightgray',
        borderRadius: '8px',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" fontWeight="bold">
          Filtros
        </Typography>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2 }} />

      <ItemCategoriesFilter
        itemCategories={itemCategories}
        category={category}
        onHandleFilterByCategory={onHandleFilterByCategory}
      />
    </Box>
  );
};

ItemFilterBar.propTypes = {
  itemCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHandleFilterByCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default ItemFilterBar;
