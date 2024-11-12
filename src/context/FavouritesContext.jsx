import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import useSWR, { mutate } from 'swr';
import FetcherSWR from '../utils/fetcherSWR';
import { SnackBarContext } from './SnackBarContext';

export const FavouritesContext = createContext();

function FavouritesContextProvider({ children }) {
  const { onToggleOpenSnackbar, onSetSnackBarMessage, onSetSnachBarSeverity } =
    useContext(SnackBarContext);

  const {
    data: favourites,
    error,
    isLoading,
  } = useSWR(
    {
      url: 'users/favourite',
    },
    FetcherSWR,
    { revalidateOnFocus: false }
  );

  const addFavourite = async (product) => {
    try {
      await mutate(
        FetcherSWR({
          url: `users/favourite`,
          options: { method: 'post', data: { productId: product } },
        })
      );
      onSetSnachBarSeverity('success')
      onSetSnackBarMessage('Producto agregado a favoritos')
      onToggleOpenSnackbar(true)
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavourite = (productId) => {
    // const filteredFavourites = favourites.filter((fav) => fav.id !== productId);
    // setFavourites(filteredFavourites);
  };

  const isFavouriteCheck = (productId) => {
    return favourites?.find((fav) => fav.id === productId);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavouriteCheck,
        error,
        isLoading,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

FavouritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavouritesContextProvider;
