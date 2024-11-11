import useSWR, { mutate } from 'swr';
import FetcherSWR from '../utils/fetcherSWR';

export default function useHistoric() {
  const { data, error, isLoading } = useSWR(
    {
      url: 'users/historic',
    },
    FetcherSWR,
    {revalidateOnFocus: false}
  );

  const AddProductToHistoric = async (productId) => {
    await mutate(
      FetcherSWR({
        url: `users/historic`,
        options: { method: 'post', data: { productId } },
      })
    );
  };

  return {
    data,
    error,
    isLoading,
    AddProductToHistoric,
  };
}
