import { useEffect, useContext, useState } from 'react';
import useSWR from 'swr';
import { Typography, Box, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FetcherSWR from '../../../utils/fetcherSWR';
import { AuthContext } from '../../../context/AuthContext';
import UserInfo from '../../../components/UserInfo';
import PurchasedItemListSkeleton from '../../../components/skeletons/PurchasedItemListSkeleton';
import PurchasedItemList from '../../../components/PurchasedItemList';
import { Link } from 'react-router-dom';

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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 4,
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }}
              />
              <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                ¡No has realizado ninguna compra aún!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Empieza a explorar nuestros productos y realiza tu primera
                compra.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/products/catalog"
                sx={{
                  borderRadius: '10px',
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#333',
                    color: 'white',
                    transform: 'scale(1.02)',
                    transition: 'all 0.2s ease-in-out',
                  },
                  textTransform: 'none',
                  paddingX: 4,
                  paddingY: 1.5,
                  fontSize: '1rem',
                }}
              >
                Explorar Productos
              </Button>
            </Box>
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
