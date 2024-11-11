import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import { Box } from '@mui/material';
import ItemGrid from '../../../components/ItemGrid';
import ItemFilterBar from '../../../components/ItemFilterBar';
import { useEffect, useState } from 'react';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const [fileteredProducts, setFilteredProducts] = useState([]);

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(
    {
      url: `products`,
    },
    FetcherSWR
  );

  const { data: categories } = useSWR(
    {
      url: `category`,
    },
    FetcherSWR
  );

  useEffect(() => {
    if (category && products) {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  const handleFilterByCategory = (categoryFilter) => {
    setFilteredProducts(products.filter((p) => p.category === categoryFilter));
  };

  if (isLoading) {
    return (
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <ItemGridSkeleton />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '90%', margin: '0 auto' }}>
      <Box marginBottom={3}>
        {categories && (
          <ItemFilterBar
            itemCategories={categories}
            category={category}
            onHandleFilterByCategory={handleFilterByCategory}
          />
        )}
      </Box>
      <Box>
        {fileteredProducts?.length > 0 ? (
          <ItemGrid items={fileteredProducts} />
        ) : (
          <ItemGrid items={products} />
        )}
      </Box>
    </Box>
  );
};

export default Catalog;
