/* eslint-disable react/prop-types */
import { Container, Typography, Box } from '@mui/material';
import UserInfo from '../../components/UserInfo';
import PurchasedItemList from '../../components/PurchasedItemList';

const Profile = ({ user, purchasedItemsHistory }) => {
  return (
    <>
      <Container sx={{ backgroundColor: 'red', width: '100%' }}>
        <Box sx={{ mb: 4 }}>
          <UserInfo user={user} />
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          MIS COMPRAS
        </Typography>

        {purchasedItemsHistory.map((purchasedItem, index) => (
          <PurchasedItemList
            key={`purchasedItemList${index}`}
            {...purchasedItem}
          />
        ))}
      </Container>
    </>
  );
};

export default Profile;
