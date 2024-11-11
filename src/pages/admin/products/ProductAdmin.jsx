import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import ItemDetailSkeleton from '../../../components/skeletons/ItemDetailSkeleton';
import ItemDetailEdit from '../../../components/ItemDetailEdit';
import { AuthContext } from '../../../context/AuthContext';
import { Box } from '@mui/material';

const ProductAdmin = () => {
  const { productId } = useParams();
  const { user } = useContext(AuthContext);

  const { data, error, isLoading } = useSWR(
    {
      url: `products/${productId}`,
    },
    FetcherSWR,
    { revalidateOnFocus: true }
  );
  

  if (isLoading) {
    return <ItemDetailSkeleton />;
  }

  if (error) {
    return <p>Error al cargar producto</p>;
  }

  console.log(data);

  if (data) {
    return (
      <Box alignContent={'center'} alignItems={'center'}>
        <ItemDetailEdit
          photos={data.photos}
          descripcion={data.description}
          title={data.name}
          price={data.price}
          stock={data.stock}
          category={data.category}
          state={data.state}
          productId={data.id}
          initialStatus={data.state}
        />
      </Box>
    );
  }

  return null;
};

export default ProductAdmin;
