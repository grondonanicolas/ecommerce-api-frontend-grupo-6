import useSWR, { mutate } from 'swr';
import FetcherSWR from '../utils/fetcherSWR';

export default function useHistoric() {
  const { data, error, isLoading } = useSWR(
    {
      url: 'users/historic',
    },
    FetcherSWR,
    {revalidateOnFocus: false, revalidateOnReconnect: true}
  );

  const AddProductToHistoric = async (productId) => {
    try {
      await FetcherSWR({
        url: `users/historic`,
        options: { method: 'post', data: { productId } },
      });

      await mutate({ url: 'users/historic' });
    } catch (error) {
      console.error('Error adding product to historic:', error);
    }
  };

  return {
    data,
    error,
    isLoading,
    AddProductToHistoric,
  };
}
