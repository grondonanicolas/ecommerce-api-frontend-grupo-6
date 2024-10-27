import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Buscar"
      fullWidth
      sx={{
        backgroundColor: '#f0f0f0',
        borderRadius: '50px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
          paddingLeft: 2,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
