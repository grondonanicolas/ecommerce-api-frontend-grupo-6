import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Slider,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ItemPriceFilter = ({ minPrice = 0, maxPrice = 500, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleReset = () => {
    setPriceRange([minPrice, maxPrice]);
    if (onChange) {
      onChange([minPrice, maxPrice]);
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => setIsOpen(!isOpen)}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="h6" sx={{ mr: 1 }}>
          Precio
        </Typography>
        <IconButton size="small">
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isOpen}>
        <Box mt={2} mx={1}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            sx={{
              color: 'black',
              '& .MuiSlider-thumb': {
                backgroundColor: 'black',
              },
              '& .MuiSlider-track': {
                backgroundColor: 'black',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'lightgray',
              },
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <Typography>${priceRange[0]}</Typography>
            <Button
              onClick={handleReset}
              variant="text"
              color="black"
              size="small"
            >
              Reset
            </Button>
            <Typography>${priceRange[1]}</Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

ItemPriceFilter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  onChange: PropTypes.func,
};

export default ItemPriceFilter;
