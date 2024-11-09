/* eslint-disable react/prop-types */
import { Typography, Box } from '@mui/material';
import UserInfo from '../../../components/UserInfo';
import PurchasedItemList from '../../../components/PurchasedItemList';

const Profile = ({ user, purchasedItemsHistory }) => {
  return (
    <>
      <Box sx={{ backgroundColor: 'white', padding: 0, margin: 0 }}>
        <Box sx={{ pb: 2, width: '100%', boxShadow: '0 4px 2px -2px gray' }}>
          <Box sx={{ mb: 4, mt: 4 }}>
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
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F2F0F1',
          }}
        >
          {purchasedItemsHistory.map((purchasedItem, index) => (
            <PurchasedItemList
              key={`purchasedItemList${index}`}
              {...purchasedItem}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Profile;
