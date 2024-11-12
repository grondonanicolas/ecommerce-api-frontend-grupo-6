import { useEffect, useContext, useState } from 'react';
import useSWR from 'swr';
import { Typography, Box } from '@mui/material';
import FetcherSWR from '../../../utils/fetcherSWR';
import { AuthContext } from '../../../context/AuthContext';
import UserInfo from '../../../components/UserInfo';
import PurchasedItemListSkeleton from '../../../components/skeletons/PurchasedItemListSkeleton';
import PurchasedItemList from '../../../components/PurchasedItemList';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isNoPurchase, setIsNoPurchase] = useState(false);
  const [purchasedItemsHistory, setPurchasedItemsHistory] = useState([]);
  const { data, isLoading } = useSWR(
    {
      url: 'profile/checkouts',
    },
    FetcherSWR
  );

  useEffect(() => {
    if (!isLoading) {
      if (data && data.length > 0) {
        setPurchasedItemsHistory(data);
      } else {
        setIsNoPurchase(true);
      }
    }
  }, [isLoading, data]);

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
          {isLoading && <PurchasedItemListSkeleton />}

          {!isLoading && isNoPurchase && (
            <Typography variant="body1">No purchases found.</Typography>
          )}
          {!isLoading &&
            !isNoPurchase &&
            purchasedItemsHistory.map((purchasedItem, index) => (
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
