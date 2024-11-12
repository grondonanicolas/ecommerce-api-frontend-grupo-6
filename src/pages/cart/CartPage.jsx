import useSWR, { mutate } from 'swr';
import CartItemList from '../../components/CartItemList.jsx';
import { useState } from 'react';
import OrderSummary from '../../components/OrderSummary.jsx';
import { Box, Button, Modal, Typography } from '@mui/material';
import FetcherSWR from '../../utils/fetcherSWR.js';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { data, error, isLoading } = useSWR({ url: 'cart' }, FetcherSWR);
  const [items, setItems] = useState([]);
  const [loadedData, setLoadedData] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate('/');
  };

  if (data && items.length === 0 && !loadedData) {
    const itemsFromService = data.productsInCart.map((product) => {
      const primaryPhoto = product.photos?.length
        ? product.photos.reduce((minPhoto, currentPhoto) =>
            currentPhoto.priority < minPhoto.priority ? currentPhoto : minPhoto
          )
        : null;

      return {
        id: product.productId,
        imageUrl: primaryPhoto?.url,
        name: product.description,
        price: product.pricePerUnit,
        quantity: product.quantity,
      };
    });

    setItems(itemsFromService);
    setLoadedData(true);
  }

  if (error) return <div>Hubo un error al cargar tu carrito ❌</div>;
  if (isLoading) return <div>Estamos cargando tu carrito... 🛒</div>;

  const handleQuantityChange = async (id, newQuantity) => {
    // todo: toast error
    try {
      await mutate(
        { url: `cart/products/${id}` },
        FetcherSWR({
          url: `cart/products/${id}`,
          options: {
            method: 'put',
            data: { quantity: newQuantity },
          },
        })
      );

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );

      await mutate({ url: 'cart' });
    } catch (error) {
      console.error('Error al actualizar la cantidad:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await mutate(
        { url: `cart/products/${id}` },
        FetcherSWR({
          url: `cart/products/${id}`,
          options: {
            method: 'delete',
          },
        })
      );

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));

      await mutate({ url: 'cart' });
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      await mutate(
        { url: 'cart' },
        FetcherSWR({
          url: 'cart',
          options: {
            method: 'delete',
          },
        })
      );
      setItems([]);
    } catch (error) {
      console.error('Error al vaciar el carrito:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      await FetcherSWR({
        url: 'cart/checkout',
        options: {
          method: 'post',
        },
      });

      await mutate({ url: 'cart' });
      setItems([]);
      setLoadedData(false);
      setOpenModal(true);
    } catch (error) {
      console.error('Error al realizar el checkout:', error);
    }
  };

  return (
    <>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Box
          sx={{
            borderBottom: '1px solid #e0e0e0',
            marginBottom: '24px',
            paddingBottom: '16px',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            Mi carrito de compras
          </h1>
        </Box>

        {error && <div>Hubo un error al cargar tu carrito ❌</div>}
        {isLoading && <div>Estamos cargando tu carrito... 🛒</div>}

        {data && items.length > 0 ? (
          <div
            style={{
              display: 'flex',
              gap: '60px',
              justifyContent: 'center',
            }}
          >
            <div>
              <Box display="flex" justifyContent="flex-start" mb={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleEmptyCart}
                  sx={{
                    borderRadius: '20px',
                    padding: '8px 16px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    color: 'white',
                    border: '1px solid transparent',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'error.main',
                      border: '1px solid',
                      borderColor: 'error.main',
                    },
                  }}
                >
                  Vaciar carrito
                </Button>
              </Box>

              <CartItemList
                items={items}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            </div>
            <div>
              <OrderSummary
                subtotal={Number(data.cartPrice).toFixed(2)}
                discount={0}
                discountPercentage={0}
                deliveryFee={0}
                total={Number(data.cartPrice).toFixed(2)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
                sx={{
                  mt: 2,
                  borderRadius: '20px',
                  padding: '12px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  border: '1px solid transparent',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'primary.main',
                  },
                }}
              >
                Finalizar compra
              </Button>
            </div>
          </div>
        ) : (
          <div>Todavía no tenés productos en tu carrito</div>
        )}
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="checkout-modal-title"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 60,
              color: 'success.main',
            }}
          />

          <Typography
            id="checkout-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            ¡Compra realizada con éxito!
          </Typography>

          <Typography variant="body1" textAlign="center" color="text.secondary">
            Tu pedido llegará en las próximas 24 horas.
          </Typography>

          <Button
            variant="contained"
            onClick={handleCloseModal}
            sx={{
              mt: 2,
              borderRadius: '20px',
              padding: '12px 24px',
              textTransform: 'none',
              fontWeight: 'bold',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Aceptar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
