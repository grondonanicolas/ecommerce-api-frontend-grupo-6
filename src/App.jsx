import FavouritesContextProvider from './context/FavouritesContext';
import SnackBarContextProvider from './context/SnackBarContext';
import Router from './router/Router';

const App = () => {
  return (
    <SnackBarContextProvider>
      <FavouritesContextProvider>
        <Router />
      </FavouritesContextProvider>
    </SnackBarContextProvider>
  );
};

export default App;
