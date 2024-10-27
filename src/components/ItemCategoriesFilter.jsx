import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton, Collapse, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ItemCategoriesFilter = ({ itemCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (type) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type]
    );
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => setIsOpen(!isOpen)}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
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
              key={type}
              label={type}
              onClick={() => handleToggle(type)}
              sx={{
                color: selectedCategories.includes(type) ? 'white' : 'black',
                backgroundColor: selectedCategories.includes(type)
                  ? 'black'
                  : 'lightgray',
                '&:hover': {
                  backgroundColor: selectedCategories.includes(type)
                    ? 'black'
                    : 'gray',
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
  itemCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemCategoriesFilter;
