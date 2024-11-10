import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import ItemDetailSkeleton from '../../../components/skeletons/ItemDetailSkeleton';
import ItemDetailEdit from '../../../components/ItemDetailEdit';
import {AuthContext} from '../../../context/AuthContext'
import { Box } from '@mui/material';

const ProductAdmin = () => {
  const { productId } = useParams();

  const { user } = useContext(AuthContext)
  const { data, error, isLoading } = useSWR(
    {
      url: `products/${productId}`,
    },
    FetcherSWR
  );

  if (isLoading) {
    return <ItemDetailSkeleton />;
  }

  if (error) {
    return <p>Error al cargar producto</p>;
  }

  console.log(data)

  if (data) {
    return (
      <Box alignContent={'center'} alignItems={'center'}>
        <ItemDetailEdit
          imageUrl={data.image}
          descripcion={data.description}
          title={data.name}
          price={data.price}
          stock={data.stock}
          category={data.category}
          state={data.state}
          productId={data.id}
        />
      </Box>
    );
  }
};

export default ProductAdmin;
