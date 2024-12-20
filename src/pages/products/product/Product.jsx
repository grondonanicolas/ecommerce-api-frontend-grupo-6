import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import FetcherSWR from '../../../utils/fetcherSWR';
import ItemDetailSkeleton from '../../../components/skeletons/ItemDetailSkeleton';
import ItemDetail from '../../../components/ItemDetail';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import useHistoric from '../../../hooks/useHistoric';

const Product = () => {
  const { productId } = useParams();
  const { AddProductToHistoric } = useHistoric();

  const { data, error, isLoading } = useSWR(
    {
      url: `products/${productId}`,
    },
    FetcherSWR
  );

  useEffect(() => {
    if (!productId) return;

    const updateHistoric = async () => {
      try {
        await AddProductToHistoric(productId);
      } catch (error) {
        console.error('Error updating historic:', error);
      }
    };

    updateHistoric();
  }, [productId, AddProductToHistoric]);

  if (isLoading) {
    return <ItemDetailSkeleton />;
  }

  if (error) {
    return <p>Error al cargar producto</p>;
  }

  if (data) {
    return (
      <Box alignContent={'center'} alignItems={'center'}>
        <ItemDetail
          descripcion={data.descripcion}
          photos={data.photos}
          title={data.name}
          price={data.price}
          stock={data.stock}
          productId={data.id}
        />
      </Box>
    );
  }
};

export default Product;
