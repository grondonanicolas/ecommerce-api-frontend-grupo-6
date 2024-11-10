import useSWR, { mutate } from 'swr';
import FetcherSWR from '../utils/fetcherSWR';

export default function useHistoric() {
  const { data, error, isLoading } = useSWR(
    {
      url: 'users/historic',
    },
    FetcherSWR
  );

  //ToDo: revisar
  const AddProductToHistoric = async (productId) => {
    const options = {
      method: 'post',
      body: JSON.stringify({ productId }),
    };

    try {
      const response = await fetch('users/historic', options);
      if (!response.ok) {
        throw new Error('Error al agregar producto al historial');
      }
      const result = await response.json();
      mutate('products/historic');
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return {
    data,
    error,
    isLoading,
    AddProductToHistoric,
  };
}
