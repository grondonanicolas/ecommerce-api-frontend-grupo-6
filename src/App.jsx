// import './App.css';
import EcommerceContainer from './components/EcommerceContainer';
import Profile from './pages/profile/Profile';

// import Router from './components/Router';

const App = () => {
  const deliveredExampleData = {
    date: '04 de Marzo',
    status: 'Entregado',
    items: [
      {
        name: 'Skinny Fit Jeans',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 1,
      },
      {
        name: 'T-shirt with Tape Details',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 2,
      },
    ],
  };

  const inTransitExampleData = {
    date: '10 de Abril',
    status: 'En camino',
    items: [
      {
        name: 'Vintage Jacket',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 1,
      },
      {
        name: 'Casual Shoes',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 1,
      },
      {
        name: 'Sunglasses',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 1,
      },
    ],
  };

  const canceledExampleData = {
    date: '15 de Mayo',
    status: 'Cancelado',
    items: [
      {
        name: 'Formal Shirt',
        imageUrl: 'https://via.placeholder.com/300',
        quantity: 1,
      },
    ],
  };

  const purchasedItemListExampleData = [
    deliveredExampleData,
    inTransitExampleData,
    canceledExampleData,
  ];

  const userData = {
    name: 'Jane Smith',
    avatarUrl: 'https://via.placeholder.com/64?text=JS',
    email: 'jane.smith@example.com',
  };

  return (
    <EcommerceContainer>
      <Profile
        purchasedItemsHistory={purchasedItemListExampleData}
        user={userData}
      />
    </EcommerceContainer>
  );
  // return <Router />;
};

export default App;
