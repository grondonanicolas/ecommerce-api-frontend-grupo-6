import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Collapse, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ItemCategoriesFilter = ({
  itemCategories,
  category,
  onHandleFilterByCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = (type) => {
    if (selectedCategory === type) {
      setSelectedCategory('');
      onHandleFilterByCategory('');
    } else {
      setSelectedCategory(type);
      onHandleFilterByCategory(type);
    }
  };

  useEffect(() => {
    if (category) {
      handleToggle(category);
    }
  }, [category]);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => setIsOpen(!isOpen)}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="h6" sx={{ mr: 1 }}>
          Categorias
        </Typography>
        <IconButton size="small">
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isOpen}>
        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
          {itemCategories.map((type) => (
            <Chip
              key={type.id}
              label={type.category}
              onClick={() => handleToggle(type.category)}
              sx={{
                color: selectedCategory === type.category ? 'white' : 'black',
                backgroundColor:
                  selectedCategory === type.category ? 'black' : 'lightgray',
                '&:hover': {
                  backgroundColor:
                    selectedCategory === type.category ? 'black' : 'gray',
                },
              }}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

ItemCategoriesFilter.propTypes = {
  itemCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHandleFilterByCategory: PropTypes.func,
  category: PropTypes.string,
};

export default ItemCategoriesFilter;
