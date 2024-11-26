import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import { Box } from '@mui/material';
import ItemGrid from '../../../components/ItemGrid';
import ItemFilterBar from '../../../components/ItemFilterBar';
import { useEffect, useState } from 'react';
import ItemGridSkeleton from '../../../components/skeletons/ItemGridSkeleton';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  const [fileteredProducts, setFilteredProducts] = useState([]);
  const [categoryError, setCategoryError] = useState('');

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(
    {
      url: `products/all`,
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
    if (category && products && categories) {

      const categoryExists = categories.some(cat => cat.category === category);
      
      if (!categoryExists) {
        setCategoryError(`No existe la categoría "${category}"`);
        setFilteredProducts([]);
      } else {
        setCategoryError('');
        setFilteredProducts(products.filter((p) => p.category === category));
      }
    }
  }, [category, products, categories]);

  const handleFilterByCategory = (categoryFilter) => {
    const filteredProducts = products.filter((p) => p.category == categoryFilter);
    if(filteredProducts.length > 0){  
      setFilteredProducts(filteredProducts);
      setCategoryError('');
      setSearchParams({ category: categoryFilter });
    }else{
      setCategoryError(`No existe la categoría "${categoryFilter}"`);
      setFilteredProducts([]);
      setSearchParams({});
    }
  };

  if(error){
    return (<p>Hubo un error al cargar los productos</p>)
  }

  if (isLoading) {
    return (
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <ItemGridSkeleton />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '90%', margin: '0 auto' }} display={'flex'}>
      <Box marginBottom={3} sx={{ width: '30%'}}>
        {categories && (
          <ItemFilterBar
            itemCategories={categories}
            category={category}
            onHandleFilterByCategory={handleFilterByCategory}
          />
        )}
      </Box>
      <Box sx={{ width: '60%', margin: '0 auto'}}>
        {categoryError ? (
          <p>{categoryError}</p>
        ) : fileteredProducts?.length > 0 ? (
          <ItemGrid items={fileteredProducts} />
        ) : (
          <ItemGrid items={products} />
        )}
      </Box>
    </Box>
  );
};

export default Catalog;
