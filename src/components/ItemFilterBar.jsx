import PropTypes from 'prop-types';
import { Box, Typography, Divider, Button, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ItemPriceFilter from './ItemPriceFilter';
import ItemCategoriesFilter from './ItemCategoriesFilter';

const ItemFilterBar = ({
  itemCategories,
  minPrice,
  maxPrice,
  onPriceChange,
  onApplyFilters,
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

      <ItemCategoriesFilter itemCategories={itemCategories} />

      <Divider sx={{ my: 2 }} />

      <ItemPriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={onPriceChange}
      />

      <Divider sx={{ my: 2 }} />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onApplyFilters}
        sx={{
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Aplicar Filtros
      </Button>
    </Box>
  );
};

ItemFilterBar.propTypes = {
  itemCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default ItemFilterBar;
