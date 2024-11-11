import EcommerceContainer from './components/EcommerceContainer';
import FavouritesContextProvider from './context/FavouritesContext';
import Router from './router/Router';

const App = () => {
  return (
    //  <EcommerceContainer>
    <FavouritesContextProvider>
      <Router />
    </FavouritesContextProvider>
    //  </EcommerceContainer>
  );
};

export default App;
