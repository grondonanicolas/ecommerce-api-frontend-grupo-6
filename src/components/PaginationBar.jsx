import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
    >
      <Button
        variant="outlined"
        color="black"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        startIcon={<ArrowBackIosNewIcon />}
        sx={{ minWidth: '100px' }}
      >
        Anterior
      </Button>

      <Box display="flex" alignItems="center" gap={1}>
        {renderPageNumbers().map((page, index) => (
          <Box key={index}>
            {page === '...' ? (
              <Typography variant="body2" color="textSecondary">
                ...
              </Typography>
            ) : (
              <Button
                variant={page === currentPage ? 'contained' : 'text'}
                onClick={() => handlePageClick(page)}
                sx={{
                  minWidth: '36px',
                  padding: 0,
                  borderRadius: '20%',
                  backgroundColor:
                    page === currentPage ? 'grey.200' : 'transparent',
                  color: page === currentPage ? 'black' : 'inherit',
                }}
              >
                {page}
              </Button>
            )}
          </Box>
        ))}
      </Box>

      <Button
        variant="outlined"
        color="black"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        endIcon={<ArrowForwardIosIcon />}
        sx={{ minWidth: '100px' }}
      >
        Siguiente
      </Button>
    </Box>
  );
};

PaginationBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationBar;
