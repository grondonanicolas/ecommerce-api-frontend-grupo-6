import { Box, Typography } from '@mui/material';
import FetcherSWR from '../utils/fetcherSWR';
import useSWR from 'swr';
import ItemGridSkeleton from './skeletons/ItemGridSkeleton';
import { useNavigate } from 'react-router-dom';

const CategoryGrid = () => {
  const navigate = useNavigate();

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR(
    {
      url: 'category',
    },
    FetcherSWR,
    {revalidateOnFocus: false}
  );

  if (isLoading) return <ItemGridSkeleton />;

  if (error) return <></>;

  if (categories) {
    return (
      <Box marginTop={5} marginBottom={6}>
        <Box marginBottom={5}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            justifyContent={'center'}
          >
            Categorías
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {categories?.slice(0, 5).map((item) => (
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
              <Box
                style={{
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '25px',
                  borderRadius: '100%',
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`/products/catalog?category=${item.category}`);
                }}
              >
                <Typography
                  style={{ fontSize: '20px', color: 'black' }}
                >
                  {item.category}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
};

export default CategoryGrid;
