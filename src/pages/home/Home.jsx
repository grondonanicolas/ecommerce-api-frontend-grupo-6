import { Grid2 } from '@mui/material';
import Footer from '../../components/Footer';
import PurchasedItemList from '../../components//PurchasedItemList';
import SearchBar from '../../components/SearchBar';
import UserInfo from '../../components/UserInfo';

const Home = () => {
  console.log('GOLA');
  const purchasedItems = [
    {
      name: 'Skinny Fit Jeans',
      imageUrl: 'https://via.placeholder.com/100',
      quantity: 1,
    },
    {
      name: 'T-shirt with Tape Details',
      imageUrl: 'https://via.placeholder.com/100',
      quantity: 1,
    },
  ];

  const user = {
    name: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/100',
    email: 'john@email.com',
  };
  return (
    <Grid2 container spacing={2} direction="column" className="App">
      <Grid2>
        <SearchBar />
      </Grid2>
      <Grid2>
        <UserInfo user={user} />
      </Grid2>
      <Grid2>
        <PurchasedItemList
          items={purchasedItems}
          date="2021-09-01"
          status="Entregado"
        />
      </Grid2>
      <Grid2>
        <Footer />
      </Grid2>
    </Grid2>
  );
};

export default Home;
