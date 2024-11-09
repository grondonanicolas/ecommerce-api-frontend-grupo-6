import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const FavouritesContext = createContext();

function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (product) => {
    setFavourites((prev) => [...prev, product]);
  };

  const removeFavourite = (productId) => {
    const filteredFavourites = favourites.filter((fav) => fav.id !== productId);
    setFavourites(filteredFavourites);
  };

  const isFavouriteCheck = (productId) => {
    return favourites.find((fav) => fav.id === productId);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavouriteCheck }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

FavouritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavouritesContextProvider;
